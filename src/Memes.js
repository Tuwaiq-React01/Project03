import React, { useState,useEffect } from 'react'
import axios from 'axios'

export default function Memes() {
    const [data,setData]=useState([])
    const [mounted,setMounted]=useState(true)
    useEffect(() => {
        callApi()
       
    }, [])
    const callApi = ()=>{
        axios.get('https://api.imgflip.com/get_memes')
        .then((response)=>{ setData(response.data.data.memes)

        }).catch((e)=>{
            console.log("error",e)
        })
    }

    var mem = data.map((item, index) => {
        return (
            <div key={index} className="raw" style={{width:"250px",height:"250px",marginLeft:"5px",marginRight:"5px",display:'inline-grid' }} >
                
                    <img src={item.url} alt={item.name} width="250" height="300" />
            
            </div>


        )
    })

    return (
        <div className="container">
                <h1>Want to be a professional Memer ? .. you need to visit our site more <br/> {mem} </h1>
            </div>
    )
}
