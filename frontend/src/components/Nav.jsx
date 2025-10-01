import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Nav({ user, setUser }) {
  const nav = useNavigate();
  function logout(){ setUser(null); nav('/'); }
  return (<div className='nav'><div style={{fontWeight:700,color:'#111'}}>CourierNest</div><div style={{display:'flex',gap:10,alignItems:'center'}}><Link to='/browse' className='btn btn-outline'>Browse</Link>{user? (<><Link to='/post' className='btn btn-primary'>Post</Link>{user.role==='admin' && <Link to='/admin' className='btn btn-outline'>Admin</Link>}<button onClick={logout} className='btn btn-outline'>Logout</button></>) : (<><Link to='/login' className='btn btn-outline'>Login</Link><Link to='/signup' className='btn btn-outline'>Sign up</Link></>)}</div></div>);
}
