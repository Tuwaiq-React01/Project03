import React from 'react'
import Products from "./Products"
import "./Home.css"
import Nav from "./Nav"

export default function Home() {     
    return (
        <div >
        <div className="ShowProduct">
        <h1 className="welcome">Online Shopping</h1>
        <br/>
        </div>
        <Products/>   
      </div>
    )
}
