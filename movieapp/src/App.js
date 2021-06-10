import 'bootstrap/dist/css/bootstrap.min.css';
import  React,{ useState,useEffect } from 'react';
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Latest from './Components/Latest';
import axios from 'axios'
import About from './Components/About';
import Login from './Components/Login';
import Search from './Components/Search';



export default function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMoveiList()
    }, [])

    


  

  const getMoveiList= () =>{
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=b2d6e4e0261278564a0580683edec388&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free")
      .then((res)=>{
          // console.log("get", res.data)
          setMovieList(res.data.results)
      }).catch((err) => {
              console.log("error", err);
          })
      }


       
    return (
      <Router>
        
        <NavBar/>
        <Route exact path="/"> 
            <Latest movieList={movieList} setMovieList={setMovieList}/>
        </Route>
        <Route exact path="/about"> 
          <About/>
        </Route>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/search">
          <Search/>
        </Route>

      </Router>
    )
  
}
