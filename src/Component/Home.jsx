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
        navigate('')
      }
    })
  return (
    <div style={style}>
        <h6>welcome to my shopping page</h6>
      <p>welcome to git hub everyone</p>

    </div>
  )
}
