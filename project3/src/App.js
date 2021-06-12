import './App.css';
import Login from './Login'
import List from './List'
import  React,{ useState,useEffect } from 'react';
import axios from 'axios'
import MoviesList from "./MoviesList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Clock from './Clock.js'

function App() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    getmovie()
    }, [])

  const getmovie= () =>{
      axios.get("http://www.omdbapi.com/?s=tom%20and%20jerry&apikey=d4902665")
      .then((res)=>{
          setmovie(res.data.Search)
      }).catch((err) => {
              console.log("error", err);
          })
      }

   
    const movieList = movie.map((item, index) => {
        return <MoviesList key={index} Poster = <img src = {item.Poster} />Title={item.Title} Year={item.Year} imdbID={"imdb ID: "+item.imdbID} Type={item.Type} />
    })
    const movieRow = movieList.map((item) => {
        return <Col xs ="3">{item} </Col>
    })
    return (
        <div>
              <center><div className = "test">
       <h1>Welcome to Tom and Jerry movies</h1> 
      <h4><Clock /></h4> 

      </div>
       <h1>   
         
--------------------------
--------------------------

       </h1>
 

</center>    
            <Container>

                <Col>
                    <Row>
                        {movieRow}
                    </Row>
                </Col>
            </Container>
        </div>
    )
}
export default App;