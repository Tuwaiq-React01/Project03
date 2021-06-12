import React, { useState } from 'react'
import axios from 'axios'
import SportsArts from './SportsArts'

export default function SportsNews() {
    const [data,setData]=useState([])
    const [mounted,setMounted]=useState(true)
    const callApi = ()=>{
        axios.get("https://livescore6.p.rapidapi.com/news/list",{
            params: {category: 'soccer'} , 
            headers: {
                'x-rapidapi-key': '96ba2cc1d4mshd89fd2c4da6ee3cp189194jsn9ee3e4347e14',
                'x-rapidapi-host': 'livescore6.p.rapidapi.com'
              }
        }).then((response)=>{setData(response.data.arts)})
        .catch((e)=>{console.log("error",e)})
    }
    var articles=data
    return (
        <div>
             <div>
                <h3 style={{marginTop:'10px'}}>There are a limited number of API calls PLEASE use it carefully</h3>
                <button onClick={()=>callApi()}>CAll the API </button>
               <SportsArts ap={articles}/>
            </div>
            
        </div>
    )
}
