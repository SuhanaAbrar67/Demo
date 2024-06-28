import React from 'react'

export default function Map() {
    const ar=[10,20,30,40];
    const ar1=["apple","orange","mango","grapes"]
    const data=[
        {name:"raghav",age:34},
        {name:"tara",age:25},
        {name:"samarth",age:46},
    ];

  return (
    <div>
      {ar.map((item,index)=>{
        return<h1>{item}</h1>
      })
      }
        {ar1.map((item,index)=>{
        return<h1>{item}</h1>
      })
      }
        {data.map((i,index)=>{
        return<h1>{i.name}</h1>
        return<h1>{i.age}</h1>
        })}
      </div>
  )
}
