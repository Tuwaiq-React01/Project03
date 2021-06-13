import React from 'react'
import axios from 'axios'
import {useEffect,useState}from'react'

export default function Home() {
    const [holiday ,setholiday] = useState({})
    // const[days ,setDays] =useState("")
    useEffect(() => {
      getApi()
    }, [])
    // const callApi= () =>{
    //   axios({
    //     method: "get",
    //     url: "https://www.gov.uk/bank-holidays.json"
    //   })
    //     .then((events) => {
    //       setholiday({...events.holiday})
    //       console.log("Response !!!!! ",holiday)
    //     })
    //     .catch((error) => {
    //       console.log("error", error)
    //     })
    // }
    const getApi= () =>{
        axios.get("https://www.gov.uk/bank-holidays.json")
        .then((res)=>{
           console.log(res.data)
            setholiday(res.data.events)
        }).catch((err) => {
                console.log("error", err);
            })
        }
    // console.log(holiday)
    return (
        <div>
         <center>
          <h4 className="text">The title :{holiday.events.title}</h4>
          <h6 className="text">holiday : {holiday.events.date}</h6>
          <p className="text">{holiday.events.note}</p>
          </center>            
        </div>
    )
}
