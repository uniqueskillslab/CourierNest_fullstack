// thin wrapper that matches previous mock api usage
import API from './main_api';
export const api = {
  listJobs: (filters={}) => API.get('/jobs',{ params: filters }).then(r=>r.data),
  getJob: (id) => API.get(`/jobs/${id}`).then(r=>r.data),
  postJob: (job) => API.post('/jobs', job).then(r=>r.data),
  applyJob: (jobId, payload) => API.post(`/apply/${jobId}`, payload).then(r=>r.data),
  signup: (p) => API.post('/auth/signup', p).then(r=>r.data),
  login: (p) => API.post('/auth/login', p).then(r=>r.data),
  adminStats: () => API.get('/admin/stats').then(r=>r.data)
};
