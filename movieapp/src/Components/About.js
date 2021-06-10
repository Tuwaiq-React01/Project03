import React from 'react'

export default function About() {
    return (
        // <div className="card">
        //     <p>This Movie App Project applies the following concept</p>

        //     <ul>
        //         <li>using functionl componenets-hooks</li>

        //         <li>using react-router-dom</li>
        //         <li>using third-party authentication</li>
        //         <li>using at least two functions of Hooks</li>
        //     </ul>
        // </div>
        <div class="card col" style={{backgroundColor:"rgba(104, 104, 104, 0.675)", margin:" auto", float:"none"}}>

        <div class="card-header">
          About 
        </div>
        <div class="card-body">
          <h3 class="card-title" style={{color:"black",margin:"auto",fontSize:"20px"}}>This Movie App is applying the following concepts:</h3>
          <b></b>
          <ul className="block-text" style={{margin:"auto", color:"black"}}>
                <li>using functionl componenets-hooks</li>

                 <li>using react-router-dom</li>
               <li>using third-party authentication</li>
                <li>using at least two functions of Hooks</li>
         </ul>
          
        </div>
      </div>
    )
}
