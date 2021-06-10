import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"


export default function Advice() {

    const [state, setState] = useState(null)


    useEffect(() => {
        getAdvice();
    })

    const getAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const advice = response.data.slip.advice;
                console.log(advice)
                setState(advice);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <div className="App" >
                <center >
                    <h1 style={{ margin: '150px', marginBottom: "-50px", textShadow: "0 0 5px #FFFF00" }}>API To Generate an Advice To You</h1>
                    <div className="card" style={{ padding: "50px", margin: '150px', marginTop: "105px", boxShadow: "5px 10px #888888" }}>
                        <h5 style={{ paddingBottom: "45px" }}>{state}</h5>
                        <button style={{ margin: "25px", padding: "-250 statpx" }} className="btn btn-warning" onClick={getAdvice}>New Advice</button>
                    </div>
                </center>
            </div>
        </div>
    )
}
