import React from 'react'

export default function TernaryOp() {
    let a="false"
  return (
    <div>
      <div>TernaryOperator</div>
      {a=="true"?<h1 style={{color:"blue"}}
      >True</h1>:<h1 style={{color:"red"}}
      >False</h1> }

    </div>
  )
}
