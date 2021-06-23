import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function AnimeList() {
    const [Data, setdata] = useState([])
    const [select, setselect] = useState(1)

    useEffect(() => {
        callApi()
      
    }, [])

    function callApi() {
        axios({
          method: "get",
          url: "https://api.jikan.moe/v3/top/anime/1/upcoming"
        }).then((response) => {
          setdata(response.data.top)
         
        }).catch((e) => {
          console.log("error", e);
        })
      }
      console.log("res", Data);
     
     function onChange(event) {
        setselect(
            event.target.value
        )
    }
      

    return (
        <div>
        <h1 class="center">Top Upcoming 50 Animes</h1>
        {Data[0]
          ? <h1>Title: {Data[select-1].title}</h1>

          : <h1>loading</h1>}


        {Data[0]
          ? <h1>Rank: {Data[select-1].rank}</h1>
          
          : <h1>loading</h1>}

        {Data[0]
          ? <img class="center" src ={Data[select-1].image_url} />
          
          : <h1>loading</h1>}

        {Data[0]
          ? <h1>Likes: {Data[select-1].members}</h1>
          
          : <h1>loading</h1>}


        <form>
            <div>
                <h1>put any number from 1 to 50</h1>
                <input class="center" type="text" value={null}  onChange={(event) =>onChange(event)}/>
            </div>
        </form>
       

        </div>
    )
}
