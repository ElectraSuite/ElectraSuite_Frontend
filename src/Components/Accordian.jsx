import React, { useState } from "react";
import AccordContent from "./AccordContent";
const Accordian=({c,sc,u,su})=>{
    const [isactive,setIsActive] = useState(false);

    return(
       <div >
        
        {isactive && <AccordContent c={c} sc={sc} u={u} su={su} />}
        <button onClick={()=>setIsActive(!isactive)}>
            
        {isactive ? '-' :'+'}
        </button>
        
        


       </div>

    )
}

export default Accordian