import React, { Component } from 'react'

export default function Makeup(props) {
  
        return (
          <div className="tb">
              <div className="my">
                <p className="name"> {props.name}</p>
              <img src={props.image_link} height="200px"></img>
              <p>Price: {props.price}</p>
              <p className="des">{props.description}</p>
              </div>

          </div>
        )
  
    
}
