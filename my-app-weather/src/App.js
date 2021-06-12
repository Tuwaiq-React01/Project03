
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Component } from 'react'
import HeaderImage from './HeaderImage'
import Days from "./Days"
import NavbarHeader from './NavbarHeader'
import TimeZone from './TimeZone';
import  { useEffect, useState } from 'react'
import React from 'react'

export default function App() {
  const [data ,setData] = useState({})
  // const[days ,setDays] =useState("")
  useEffect(() => {
    callApi()
  }, [])
  const callApi= () =>{
    axios({
      method: "get",
      url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Springfield,IL?unitGroup=us&key=AHBS12DVFHFFSHF764DGDB"
    })
      .then((info) => {
        setData({...info.data})
        console.log("Response !!!!! ",info.data)
        // console.log(this.state.data.days.map((item) => { console.log(item.datetime ,item.conditions) }))
      })
      .catch((error) => {
        console.log("error", error)
      })
  }
  console.log(data);
  return (
    
    <div>
        <center>
          <HeaderImage />
          <h4 className="text">The weather in :{data.resolvedAddress}</h4>
          <h6 className="text">Time zone : {data.timezone}</h6>
          <p className="text">{data.description}</p>
          {/* <p>{printD}</p> */}
         <h2 id="d15" className="text"> Weather forecast for the next 15 days</h2><br></br>
         </center>
          {data.days ? <Days arr={data.days} /> : null}
          <center>
          </center>
    </div>
  )
}


