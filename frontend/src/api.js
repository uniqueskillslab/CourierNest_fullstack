// Supabase API wrapper - replaces backend API calls
import { supabaseApi } from './supabaseApi'

export const api = {
  listJobs: (filters = {}) => supabaseApi.listJobs(filters),
  getJob: (id) => supabaseApi.getJob(id),
  postJob: (job) => supabaseApi.postJob(job),
  applyJob: (jobId, payload) => supabaseApi.applyJob(jobId, payload),
  signup: (p) => supabaseApi.signup(p),
  login: (p) => supabaseApi.login(p),
  adminStats: () => supabaseApi.adminStats()
}