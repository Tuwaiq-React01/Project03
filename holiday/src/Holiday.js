import React from 'react'

export default function Holiday(props) {
    return (
        <div className="holiday">
         <h1> {props.name} </h1>
         <span> {props.date} </span>
          <span>{props.type}  </span>
        </div>
    )
}
