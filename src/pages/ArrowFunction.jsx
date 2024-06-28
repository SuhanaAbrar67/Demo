import React from 'react'

export default function ArrowFunction() {

    const a=10;
    const s="abc"
    const Addnumber=(a,b)=>a+b;
    const Hello1=()=>{
        return(
            <>
            <h1>Hello</h1>
            <p>hello</p>
            </>
        )
    }
  return (
    <div>
      {/*variable calling*/}
      {a}
      {s}

{/*Arrow/>*/}
{Addnumber(2,6)}
<Hello1/>

    </div>
  )
}
