import React, { useState, useEffect } from 'react'
import Anime from '../components/Anime'
import axios from 'axios'

export default function FavAnime(props) {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
      callApi();
      
  }, [])

  function callApi() {
      axios({
          method : 'GET',
          url : 'https://localhost:5001/api/v1/Anime'
      })
      .then(response => {
        setAnime(response.data);
      })
      .catch(() => console.log('error with http request!'));
  }

  const mappedAnime = anime.map(obj => {
          return (<Anime anime={obj} actionType = "Add to Favorite" />)
  });

  return (
      <div>
          <div>
              <div className="d-flex mb-3 justify-content-between flex-wrap">
                  { mappedAnime }
              </div>
          </div>
      </div>
  )
}
