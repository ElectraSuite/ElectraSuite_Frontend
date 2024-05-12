import {BrowserRouter,Route,Routes} from 'react-router-dom'
import funcn from './Components/formula';
import './App.css';
import Map from './Components/Map';
import Accordian from './Components/Accordian';
import { useEffect, useState } from 'react';
import './App.css'




function App() {
  // const [auth,setAuth]=useState({})
  // useEffect(()=>{
  //   const fetchData=async ()=>{
  //     const myData  = {"name": "phasorplot", "params": [[67, -120], [55, 33]]}
  //     const result=await fetch('http://127.0.0.1:8000/post/',{
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin':'*',
  //     'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
  //   },
  //   body: JSON.stringify(myData)})
  //   const resultInjson= await result.json()
  //   setAuth(prev=>[...prev,resultInjson])
    
  // const jsonRes= await result.json()
  // setAuth(jsonRes)}
  // fetchData()

  // },[])

  // const poster = async() =>{
  //   const myData  = {"name": "phasorplot", "params": [[67, -120], [55, 33]]}
  //   const result=await fetch('http://127.0.0.1:8000/post/',{
  // method: 'POST',
  // headers: {
  //   'Content-Type': 'application/json'
  // },
  // body: JSON.stringify(myData)})
  // const resultInjson= await result.json()
  // setAuth(prev=>[...prev,resultInjson])
  
    
  
  // }
  const [c,sc]=useState([]);
  const [u,su]=useState("Electra-Suite");
  return (
    <div style={{display:"flex"}}>

     <Accordian c={c} sc={sc} u={u} su={su}/>
    
     <Map c={c} u={u}/>
      </div>
    
  );
}

export default App;
