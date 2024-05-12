import React, { useState } from "react";
import AccordContent from "./AccordContent";
const Accordian=({c,sc,u,su})=>{
    const [isactive,setIsActive] = useState(false);

    return(
       <div >       
        <AccordContent c={c} sc={sc} u={u} su={su} />
       </div>

    )
}

export default Accordian