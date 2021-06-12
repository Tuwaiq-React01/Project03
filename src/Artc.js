import React, { useState } from 'react'

export default function Artc(props) {
    const [show,setShow]=useState(false)
    const showA = ()=>{
        setShow(!show)
    }

    return (
        <div>
             <button onClick={()=>showA()}>Show\Hide Details</button>
                { show? <p> {props.de}</p> : null }
        </div>
    )
}
