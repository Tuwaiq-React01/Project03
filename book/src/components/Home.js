import React from 'react'
import Headers from './Headers'
export default function Home(props) {


    
    return (
        <div>
          <Headers/>

          {localStorage.getItem("token") ? 
          
          <div style={{width:"800px", margin:"0 auto" }}> 

                <h4 >Welcome to Books website</h4>

                <p>
                    This website help you to find your favorite books     
                </p>

          </div>  :null
    }

            {/* <Books/> */}
        </div>
    )
}
