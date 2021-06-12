import React from 'react'

export default function User(props) {
    return (
        <div className="container mt-5 p-5 text-center border border-secondary">
                <div>
                    <img className="border rounded-circle" src={props.imageUrl} style={{ height: 300, width:300 }}/>
                </div>
                <div className="conainer m-5">
                    <h4 className="conainer mt-3">Email : <span className="text-primary">{props.email}</span></h4>
                    <h4 className="conainer mt-3">Name : <span className="text-primary">{props.name}</span></h4>
                </div>
        </div> 
    )
}