import React, { useState } from 'react'
import Like1 from "../img/like.png";
import Qoute from '../img/qoute.jpg';
import './Style.css'

export default function Qoutes(props) {
    const [like, setlike] = useState(false);

    const clickToLike = ()=>{
        setlike(!like)
    }
    return (
        
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={Qoute} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Qoutes </h5>
                        <p class="card-text">this Some Qoutes</p>
                        <p>"{props.item.text}"</p>
                        <p>- {props.item.author}</p>
                    <img id="forClick" width={50} src={Like1} onClick={clickToLike} style={like? {opacity:1} : {opacity:0.5}}></img>
                    </div>
            </div>
        
    )


}
