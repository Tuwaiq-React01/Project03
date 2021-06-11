import React, { useState, useEffect } from 'react'
import ImageCaller from './ImageCaller'
export default function FormInput() {
    const [userInput, setUserInput] = useState("")

    const handleUserInput = event => {
        setUserInput(event.target.value);
        console.log(userInput)
    }


    return (
        <div style={{
            backgroundColor: "#264653"
        }}>
            <div style={{
                backgroundColor: "#E76F51"
            }}>
                <label htmlFor="input" style={{ display: "block", fontSize: "150%", fontWeight: "400" }}>Please enter your name:</label>
            </div>
            <input id="input" onChange={handleUserInput} value={userInput}
                style={{
                    width: "25rem", height: "4rem", border: "3px solid black",
                    display: "block", margin: "auto", textAlign: "center",
                    fontSize: "150%"
                }}>
            </input>

            <ImageCaller userInput={userInput} />
        </div >

    )
}
