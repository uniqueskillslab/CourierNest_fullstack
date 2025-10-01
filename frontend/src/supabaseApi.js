import { supabase } from './supabase'

// Helper function to generate unique IDs
function generateId(prefix = 'id_') {
  return prefix + Math.random().toString(36).slice(2, 9)
}

export const supabaseApi = {
  // Authentication
  async signup({ username, password, role = 'student' }) {
    try {
      const { data, error } = await supabase
        .from('users')
        .insert([{ username, password, role }])
        .select()
        .single()

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          throw new Error('User already exists')
        }
        throw error
      }

      return {
        token: 'token_' + data.id,
        user: { id: data.id, username: data.username, role: data.role }
      }
    } catch (error) {
      throw new Error(error.message || 'Signup failed')
    }
  },

  async login({ username, password }) {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single()

      if (error || !data) {
        throw new Error('Invalid credentials')
      }

      return {
        token: 'token_' + data.id,
        user: { id: data.id, username: data.username, role: data.role }
      }
    } catch (error) {
      throw new Error(error.message || 'Login failed')
    }
  },

  // Jobs
  async listJobs(filters = {}) {
    try {
      let query = supabase
        .from('jobs')
        .select('*')
        .order('posted_on', { ascending: false })

      // Apply filters
      if (filters.q) {
        query = query.or(`title.ilike.%${filters.q}%,company.ilike.%${filters.q}%,description.ilike.%${filters.q}%`)
      }
      if (filters.job_type) {
        query = query.eq('job_type', filters.job_type)
      }
      if (filters.pay_type) {
        query = query.eq('pay_type', filters.pay_type)
      }
      if (filters.level) {
        query = query.eq('level', filters.level)
      }

      const { data, error } = await query
      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching jobs:', error)
      return []
    }
  },

  async getJob(id) {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('_id', id)
        .single()

      if (error) throw error
      return data
    } catch (error) {
      throw new Error('Job not found')
    }
  },

  async postJob(job) {
    try {
      const jobData = {
        ...job,
        _id: generateId('job_'),
        posted_on: Date.now()
      }

      const { data, error } = await supabase
        .from('jobs')
        .insert([jobData])
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      throw new Error('Failed to post job')
    }
  },

  // Applications
  async applyJob(jobId, application) {
    try {
      const applicationData = {
        ...application,
        _id: generateId('app_'),
        job: jobId,
        applied_on: Date.now()
      }

      const { data, error } = await supabase
        .from('applications')
        .insert([applicationData])
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      throw new Error('Failed to submit application')
    }
  },

  // Admin stats
  async adminStats() {
    try {
      const [jobsResult, applicationsResult] = await Promise.all([
        supabase.from('jobs').select('*'),
        supabase.from('applications').select('*')
      ])

      if (jobsResult.error) throw jobsResult.error
      if (applicationsResult.error) throw applicationsResult.error

      const totalJobs = jobsResult.data?.length || 0
      const totalApps = applicationsResult.data?.length || 0
      const paidCount = jobsResult.data?.filter(job => job.pay_type === 'Paid').length || 0

      return { totalJobs, totalApps, paidCount }
    } catch (error) {
      console.error('Error fetching admin stats:', error)
      return { totalJobs: 0, totalApps: 0, paidCount: 0 }
    }
  }
}
