import React, {Component} from 'react';
import './Main.css';

function Card(props) {

    const onTrigger = () => {
        props.gettype(props.name);
    }
    return (
        <div className={"col-md-4"} onClick={onTrigger}>
            <div className="wrimagecard wrimagecard-topimage">
                <div className={"wrimagecard-topimage_header"} style={{backgroundColor: "rgba(22, 160, 133, 0.1)"}}>
                    <center><i style={{color: "#16A085"}}><img style={{width: "100px", height: "100px"}}
                                                               src={props.name.image}/></i></center>
                </div>
                <div className={"wrimagecard-topimage_title"} style={{textAlign: "center"}}>
                    <h4>{props.name.name}
                        <div className={"pull-right badge"} id="WrControls"></div>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Card;