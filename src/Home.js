import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import {Route,Link,BrowserRouter as Router,Switch}from 'react-router-dom'
import Post from './Post'
import Popup from './Popup'


export default function Home(props) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")
    const [images, setImages] = useState([])
    
    useEffect(()=>{
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
        setPicture(localStorage.getItem('picture'))
    
        axios.get("https://dog.ceo/api/breeds/image/random/7")
        .then(res =>{
            console.log(res.data.message)
            setImages(res.data.message)
        })
    }, [])

    const logout = ()=>{
        localStorage.clear()
    }

    return (
        <div>
            <nav>
                <Link to="/">Home  </Link> 
                <Link to="/Contact"> Contact  </Link> 
                <Link to="/logout" onClick={logout}> logout
                
                </Link> 

            </nav>
            
            <Popup/>
            {images.map((item,i)=>{
                return  <Post key={i} img={item} title ={"test"}/>
            })}
        </div>
    )

}
