import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import JobDetail from './pages/JobDetail';
import PostJob from './pages/PostJob';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';
import Nav from './components/Nav';
import './index.css';

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(()=>{ const raw = localStorage.getItem('courier_user'); if(raw) setUser(JSON.parse(raw)); },[]);
  function setAuth(u){ if(u) localStorage.setItem('courier_user', JSON.stringify(u)); else localStorage.removeItem('courier_user'); setUser(u); }
  return (<div className='app-bg'><div className='container'><Nav user={user} setUser={setAuth} /><Routes><Route path='/' element={<Home/>}/><Route path='/browse' element={<Browse/>}/><Route path='/job/:id' element={<JobDetail user={user}/>}/><Route path='/post' element={<PostJob user={user}/>}/><Route path='/login' element={<Login setUser={setAuth}/>}/><Route path='/signup' element={<Signup setUser={setAuth}/>}/><Route path='/admin' element={<Admin user={user}/>}/></Routes><footer>CourierNest — Demo (frontend + backend)</footer></div></div>);
}
