import React from 'react'
import Quote from './Quote'
import {useEffect, useState} from 'react'
import axios from 'axios'
export default function Home() {
    const [data ,setData] = useState([])
  
    useEffect(()=> {callApi()},[])
    const handleClick =() => {
      callApi()
     
     }
    const callApi = () =>  {
      axios({
        method: "get",
        url: "quotes/random"
      }).then((response) => {
        setData(response.data.data)
      }).catch((e) => {
        console.log("error", e);
      })
    }
    console.log(data)
  
    console.log(data.length)
   return (data.length !== 0 ) ? 
    (<center>
             <Quote  CharacterName = {`${ data.character.firstname} ${ data.character.lastname}`} qoute = { data.content} handleClick= {handleClick}/> 
  
        </center>)
      : (
        <center>
        <span>Loading Quotes</span>
        </center>
      )
        
}
             