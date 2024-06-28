import React from 'react'

export default function Destructure() {
    const a=["radha",45,"jhon","kar1"];
    const [d,f,g,h]=a;
    const obj={
        name:"radha",
        age:45,
        address:"mangalore",
    };
    const{name,age,address}=obj;
  return (
    <div>
      {d}
      {address}
    </div>
  )
}
