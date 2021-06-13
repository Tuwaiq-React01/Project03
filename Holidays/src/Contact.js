import React ,{useState,useEffect} from 'react'

export default function Contact() {
    const[number,setNumber]=useState("")
    useEffect(()=>{
        setNumber("050-xxx-xxxx")
    },[])
    return (
        <div>
            <center> 
            <h1> Contact </h1>
            <h1> {number}</h1>
            </center>
        </div>
    )
}
