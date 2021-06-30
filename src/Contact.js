import React ,{useState,useEffect}from 'react'

export default function Contact() {
    const [number, setnumber] = useState("")
    useEffect(() => {
        setnumber("05542691837")
       
    }, [])
    return (
        <div>
            <h1>Contact1</h1>
            <h1>{number}</h1>
        </div>
    )
}
