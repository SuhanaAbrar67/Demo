import React from 'react'

export default function SpreadOp() {
    const h=["a","b","c","z"];
    const g=["d","e","f"];
    const s=[...h,...g];
    const k=["a","c","i","t"];
    const j=[...k,6,7,8]

    const ob1={
        name:"jhon",
        age:45,
        address:"mangalore",
    };
    const ob2={
        ...ob1,
        tel:34567890,
    };

  return (
    <div>
      {s}
      {ob1.name}
      {ob2.name}
    </div>
  )
}
