import React , {useState,useEffect} from 'react'

export default function Contact() {
    const [number,setNumber]=useState("")
useEffect(() => {
    setNumber("052436321")
}, [])

    return (
        <div>
            
            <h1>Content</h1>
            <h2>{number}</h2>
        </div>
    )
}