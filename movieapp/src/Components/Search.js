import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Search() {
    const [movies, setMovies] = useState ([])
    const [query, setQuery] = useState("")

    useEffect(() => {
       
    }, [movies])

    const SerachButton = (e) => {
        e.preventDefault();
       axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b2d6e4e0261278564a0580683edec388&query=${query}`)
       .then( (res) => { 
        setMovies([...res.data.results]); })
        .catch((err) => { console.log(err.data);})
       }

    return (
        <div>
				<div className="welcom">
					<h1 > What is on your mind!!</h1>
				</div>
				<form>
					<div className= "divInput">  

						<input placeholder="Enter Movie Name..." className="inputTag" onChange={(e)=> setQuery( e.target.value)}/>
						<button type="submit" className="btn btn-dark" onClick={SerachButton}> Search</button>
					
					</div>
					
				
					</form>
					
					{movies.map((m,i)=>{
					return(
					<div class="card" style={{backgroundColor:"rgba(10, 10, 3, 0.897)"}}>
					
                    <div>
                    {m.backdrop_path?<img  className="image" src={`https://image.tmdb.org/t/p/original${m.backdrop_path}`} /> :<img  className="image" src='https://bitsofco.de/content/images/2018/12/broken-1.png' />}

                    <div class="card-header" style={{color:"white"}}> <h2><b>{m.original_title}</b></h2></div>

                    </div>    
					<div class="card-body">
					
						<p className="block-text"> <strong>Overview: <strong/></strong>{m.overview}</p>

						<p className="block-text"> <strong>Original Language: </strong>{m.original_language}</p>
						

						<p className="block-text"> <strong>Popularity: </strong>{m.popularity}</p>
						

						<p className="block-text"> <strong>Release Date: </strong>{m.release_date}</p>
			

						<p className="block-text"> <strong>Vote Average: </strong>{m.vote_average}</p>
				
					</div>
					<button type="button" class="btn btn-dark" >Watch</button>
					</div>  
					)
					})
					}

			</div>

    )
}
