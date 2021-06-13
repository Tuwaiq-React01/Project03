import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './base.css'
import './animated-grid.css'
import NavBar from './NavBar'

export default function Food2() {
    const[food,setFood]=useState([])

    
    function callApi (){
        axios({
            method: "get",
            url: 'https://foodish-api.herokuapp.com/api'
          }).then((response) => {
            setFood([...food,response.data])
            
            
            //console.log(setFood,"this response ", response.setFood);
          }
          ).catch((error) => {
            console.log("error", error)
          })
          
    }
   
    
    useEffect (() => {
        if(food.length < 13){callApi()
            
        }
    },[food]) 

   console.log(food)
    return (
        // <div>
        //     {food.map((item,index) =>{
        //         return <session key={index} class="animated-grid">
                    
        //                 <div
        // class="card" style= { { backgroundImage: `url( ${item.image})` } }>
        //     <h3>Food {index+1}</h3>
        //                 </div>
        //                 </session>  
        //     })}
        //     {/*
        //     <img src={food.image}/> */}
            
        // </div>
        <div>
          <NavBar/>
          
            {food.length <13?console.log(food):
          <session class="animated-grid">
      <div
        class="card" style= { { backgroundImage: `url( ${ food[0].image })` } }>
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ food[1].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ food[2].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ food[3].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ food[4].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ food[5].image })` } }
      >
      </div>
      <div
        class="card card-wide"
        style= { { backgroundImage: `url( ${ food[6].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ food[7].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ food[8].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ food[9].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ food[10].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ food[11].image })` } }
      >

      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ food[12].image })` } }
      >
          <h2>Resturant A</h2>
      </div>
      </session> 
}
    
    </div>
    )
}
