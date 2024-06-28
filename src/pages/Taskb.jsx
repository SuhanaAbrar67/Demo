import React from 'react'

export default function Taskb() {
    let value1="right"
    let value2="left"
    const click=(value)=>{
        {value=="right"?alert("you have clicked the right button"):alert("ypu have clicked left button")}

    }
        
  return (
    <div>
      <button onClick={()=>click("value1")}>button1</button>
      <button onClick={()=>click("value2")}>button2</button>
    </div>
  )
}
