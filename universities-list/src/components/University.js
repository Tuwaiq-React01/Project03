import React, { Component } from 'react'




export default function University(props) {
    return (
        <div>
             <div className="uniCard">
             <div>
                <div>{props.uni.name}</div>
                <div>{props.uni.country}</div>
                </div>
                <a href={props.uni.page} className="btn">Visit</a>
            </div>
        </div>
    )
}
