import React, { Component } from 'react'

export default function Form(props) {
    
        return (
            <div>
                <label >{props.label}</label>
                <input type={props.type}></input>
            </div>
        )
    
}
