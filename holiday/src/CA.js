
import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Holiday from './Holiday';

export default function CA() {

  // hoooks 
  const [CAData,setCAData] = useState([])
  useEffect(()=>{
    fetchData();
    return () => {
      
    }
  },[])

 const fetchData =()=>{
    const options = {
      method: 'GET',
      url: '2019/CA/',
      headers: {
        'x-rapidapi-key': '2ea66b715bmsh5d95c7269a59d90p15132ajsn5852b4261215',
        'x-rapidapi-host': 'public-holiday.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setCAData(response.data)
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
}
  return (
    <div className="holiday-body">

        {CAData.map((data)=>(
          <Holiday
             name = {data.name}
             date = {data.date}
             type = {data.type}
           />
        ))}

    </div>
  )
}
