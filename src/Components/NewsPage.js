import React, { useState, useEffect } from 'react'
import '../App.css';
import News from './News';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Search from '../Search';


export default function NewsPage() {
  const [data, setData] = useState([])
  const [ready, setReady] = useState(false)

  const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI',
    params: {pageNumber: '1', pageSize: '20', withThumbnails: 'false', location: 'us'},
    headers: {
      'x-rapidapi-key': 'f816f35f7cmsh32f24e2489be3e0p13d28cjsnc23fc1a34a02',
      'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
  };
  const callApi = ()=> {
    axios.request(options).then( (response)=> {
      setData([response.data])
      console.log('res: ' + [response.data]);
      console.log('res state: ' + data);
    }).then(()=>{
      setReady(true)
    }
    ).catch(function (error) {
      console.error(error);
    });
  }
  useEffect(() => {
    callApi()
    return () => {
    }
  }, [])

  useEffect(() => {
    
    if (ready){console.log('data is ready',data[0].value)}
    return () => {

    }
  }, [ready])

  return (
    
    <div class="m-4 p-4 row bg-light d-flex justify-content-between ">
      <div class="col-8">
        
      </div>
      <div>
        {ready?<News data={data[0].value}/>:<span>Loading ...</span>}
      </div>
    </div>
  )
}