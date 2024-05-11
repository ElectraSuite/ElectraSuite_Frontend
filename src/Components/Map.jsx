import { useEffect, useState } from "react"
// import axios from "axios"
import funcn from "./formula"
import { Template } from "./ohm"

const Map_=({c,u})=>{
    const [t,st]=useState(false)
    const arr = Array(c.length).fill(0)
    const [vala, setVala]=useState(arr);
    const [dy,sdy]=useState([])
    const ParentFunc=(data)=>{

        setVala(data)
        // console.log(vala);
        
    }
    const narr = Array(c.length)
    const [nval,snval]=useState(narr);

    const Handler=(e)=>{
        snval(vala);
        console.log(nval)
        st(!t)
        fetch('http://127.0.0.1:8000/post/',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name:u,
        params:nval})
    // params: [[8,7,6], "NA"])
    }).then((response)=>{
        console.log(response);
        // const reader = response.body.getReader().toString();
        // console.log(reader);
        // response.json().then(body => console.log(body));
        if (u=='delta_wye_converter'){
        var body =  response.json();
        console.log(body.then((p)=>{
            console.log(p);
            
            sdy(["r1=",p[0],",  ","r2=",p[1],",  ","r3=", p[2]]);
        }
        ))
    }
    }).catch((error)=>{
        console.log(error);
    })
        
    }
    // ReadableStream.then((response) => { const reader = response.body.getReader()})
    // .then((response)=>{
    //     console.log(response);
    // })
    // useEffect((vala) => {setVala(vala)}, [vala])
    useEffect(()=>{},[t])
        const a=1;
    
        // console.log (funcn.ohm)
    return(
        <div>
        
      {  c.map((val,idx)=>{
          
            return <Template key={idx} description={val} idx={idx} Parent={ParentFunc} arr={vala} />
               
        }) }
        <button onClick={()=>Handler()} style={{color:'violet',backgroundColor:'grey'}}>Generate</button>
        
        <p>{nval}</p>
        { (u=='delta_wye_converter') && <p>{dy}</p>}
        
        </div>
    )
}

export default Map_;