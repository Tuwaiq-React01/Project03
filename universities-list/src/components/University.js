import React, { useState } from 'react'

export default function University(props) {

    const [heart, setheart] = useState(false);
    const [done, setDone] = useState(false);
    const a  =() => {
      
        setheart(true)
    }

      const d  =() => {
      
        setDone(true)
    }
    
    return (
        <div>
             <div class="col s12 m6 13">
             <div class="card">
             <div class="card-content">   
                <div><strong>University name: </strong>{props.uni.name}</div>
                <div><strong>Country: </strong>{props.uni.country}</div>
            </div>
                <center><a href={`${props.uni.web_pages[0]}`} class="waves-effect waves-light btn" style={{marginBottom: "33px"}}>Visit</a> 
                <img className= "heart" 
                     src="https://www.iconpacks.net/icons/2/free-instagram-like-icon-3507-thumb.png" 
                     style ={heart? {opacity:1} : {opacity:0.5}} onClick={a} ></img>
                <img className= "done" 
                     src="https://toppng.com/uploads/preview/check-mark-html-done-icon-11563029359rpmvepeinu.png" 
                     style ={done? {opacity:1} : {opacity:0.5}} onClick={d} ></img>
                
                </center>

               
            </div>
            </div>
        </div>
       
    )
}
