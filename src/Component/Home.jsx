import React, { useEffect } from 'react'
import Image from './MainAfter.webp';
import Header from './Header';
import { useNavigate } from 'react-router-dom'



export default function Home() {
    const style={
        backgroundimage:`url(${Image})`,
        width:"200px",
        height:"300px",
    }
    const navigate=useNavigate();
    const isAuthenticated=localStorage.getItem('token')!==null;
    useEffect(()=>{
      if(!isAuthenticated){
        navigate('/login')
      }
    })
  return (
    <div style={style}>
        <h7>welcome to my shopping page</h7>
     
    </div>
  )
}
