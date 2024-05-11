import React, { useState } from 'react'

export const Template = ({description,idx,Parent,arr}) => {
  const [num,snum]=useState(1)
  const [val,sVal]=useState(arr)


  return (
    <div>
    
    <label htmlFor={idx}> {description} </label>
    <input id={idx} type='text'  onChange={(e)=>{
     snum(e.target.value);
      }} />
    <button onClick={()=>{
      val[idx]=num;
      sVal(val)
      Parent(val)
    }
      }>punch me</button>
    </div>
  )
}


export const GenerateInputList = (arr) => {
  return (
    <div>ohm</div>
  )
}




