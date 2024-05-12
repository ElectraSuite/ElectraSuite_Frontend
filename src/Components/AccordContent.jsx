import Map_ from "./Map";
import funcn from "./formula";
import { useState } from "react";
import '../App.css'

const AccordContent=({c,sc,u,su})=>{

    return(
      <div style={{backgroundColor:'#133256', color:'white',minHeight:"100vh", height:'100%' ,width:'12vw', overflowX:'visible'}}>
        <div style={{position:'sticky',backgroundColor:'#4B7AF1', color:'white', fontSize:'20px', fontWeight:'bold', padding:'30px 10px'}}>
                ELECTRASUITE
            </div>
        <ul style={{listStyle:'none'}}>
            
            <li className="accordian-item">
                <button className="accordian-button"  onClick={()=>{
                sc(funcn["phasorplot"])
                su("phasorplot")
                
               }}>Phasor Plot</button>
               
            </li>
            <li className="accordian-item">
                <button className="accordian-button"  onClick={()=>{
                sc(funcn["delta_wye_converter"])
                su("delta_wye_converter")
                
               }}> d-y</button>
               
            </li>
            <li className="accordian-item">
                <button className="accordian-button"  onClick={()=>{
                sc(funcn["circle_diagram"])
                su("circle_diagram")
                
               }}> circle_diagram</button>
               
            </li>
          
            
            <li className="accordian-item">
                <button className="accordian-button"  onClick={()=>{
                sc(funcn.ohm)
                su("phasorplot")
               }}>Ohm's Law</button>
               
            </li>
            <li className="accordian-item">
                <button className="accordian-button"  onClick={()=>{
                sc(funcn["wheatstone bridge"])
                su("wheatstonebridge")
               }}>Wheatstone Bridge</button>
               
            </li>
        </ul>
    
        
      </div>
    )
}
export default AccordContent;
