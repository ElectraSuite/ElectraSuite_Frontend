import React, { useState } from 'react'

export const Template = ({description,idx,Parent,arr}) => {
  const [num,snum]=useState(1)
  const [val,sVal]=useState(arr)


  return (
    <div style={{padding:"1.5rem"}}>
    
    <label style = {{fontSize:"23px"}} htmlFor={idx}> {description} </label>
    <br style = {{display:"block", margin:"5px"}}/>
    <div style={{display:'flex'}}>
    <input style={{width:'100%', fontSize:"20px", padding:"3px"}} id={idx} type='text'  onChange={(e)=>{
     snum(e.target.value);
      }} />
    <button style={{fontSize:"20px", paddingInline:"10px", color:'white', backgroundColor:"#4B7AF1", border:"none"}} onClick={()=>{
      val[idx]=num;
      sVal(val)
      Parent(val)
    }
      }>SET</button>
    </div>
    </div>
  )
}


// export const GenerateInputList = (arr) => {
//   return (
//     <div>ohm</div>
//   )
// }




