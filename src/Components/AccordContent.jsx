import Map_ from "./Map";
import funcn from "./formula";
import { useState } from "react";
const AccordContent=({c,sc,u,su})=>{

    return(
      <div style={{backgroundColor:'black', color:'white', height:'100vh' ,width:'100%'}}>
        <ul style={{listStyle:'none'}}>
            <li>
               <button onClick={()=>{
                sc(funcn.ohm)
                su("ohm")
               }}>Power System</button> 
            </li>
            <li>
                <button onClick={()=>{
                sc(funcn.ohm)
                su("phasorplot")
               }} style={{margin:'100'}}>Control System</button>
            </li>
            <li>
                <button onClick={()=>{
                sc(funcn.ohm)
                su("phasorplot")
               }}>Ohm's Law</button>
               
            </li>
            <li>
                <button onClick={()=>{
                sc(funcn["wheatstone bridge"])
                su("wheatstonebridge")
               }}>Wheatstone Bridge</button>
               
            </li>
            <li>
                <button onClick={()=>{
                sc(funcn["phasorplot"])
                su("phasorplot")
                
               }}>Phasor Plot</button>
               
            </li>
            <li>
                <button onClick={()=>{
                sc(funcn["delta_wye_converter"])
                su("delta_wye_converter")
                
               }}> d-y</button>
               
            </li>
            <li>
                <button onClick={()=>{
                sc(funcn["circle_diagram"])
                su("circle_diagram")
                
               }}> circle_diagram</button>
               
            </li>
        </ul>
    
        
      </div>
    )
}
export default AccordContent;
