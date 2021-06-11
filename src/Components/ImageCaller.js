import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Image({ userInput }) {
    const [img, setImg] = useState("")
    const extension = ".svg"
    const url = "https://avatars.dicebear.com/api/human/"
    const requestImage = () => {
        axios({
            method: "get",
            url: url + userInput + extension
        }).then((response) => {
            console.log("res", response.config.url)
            setImg(response.config.url)
        }).catch((e) => {
            console.log("Error!", e)
        })
    }
    useEffect(() => {
        requestImage();

    }, [userInput])
    return (
        <div style={{ backgroundColor: "#E9C46A" }}>
            <h4> The API used:</h4>

            <div style={{ backgroundColor: "#E9C46A" }}>
                {userInput.length < 1 ?
                    url + userInput
                    :
                    url + userInput + extension
                }
            </div>
            <div style={{
                backgroundColor: "white"
            }}>
                <img src={img} alt="Your" style={{
                    display: "block",
                    margin: "auto",
                    width: "10%"
                }}></img>
            </div>
        </div >
    )
}
