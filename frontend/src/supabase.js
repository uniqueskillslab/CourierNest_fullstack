import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xhrjsyqtofevopfgvcbt.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhocmpzeXF0b2Zldm9wZmd2Y2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMjk3ODIsImV4cCI6MjA3NDkwNTc4Mn0.GIl-FBoeu9cBkQVPhX-1riqaIW8HgYj28Gw86hzwW7g'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
