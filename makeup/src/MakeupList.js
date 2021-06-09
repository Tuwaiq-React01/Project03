import axios from 'axios'
import Title from './Title';
import React, { useState, useEffect } from 'react';
import Makeup from './Makeup'
import App from './App'

export default function MakeupList() {
    
  const [data, setData] = useState([]);


  useEffect(() => {
    getMakeup()
    return () => {
      
    }
  }, [])
  


  const getMakeup = () => {
    axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
    .then((response) => {
      console.log("get", response.data)
      setData(response.data)
  }).catch((err) => {
      console.log("error", err);
  })
  }


        return (
            <div>
        <Title/>
        {data.map((makeup, index) => <div key={index}>
        <Makeup 
        name={makeup.name}
        image_link={makeup.image_link}
        price={makeup.price}
        description={makeup.description}/>
       </div>
        )}
         </div>
        )
    
}
