import React, {Component, useEffect, useState} from 'react';

function Result(props) {
    const [csclass, setcss] = useState("")

    useEffect(() => {
        setcss(props.ccs)
    },[])

    useEffect(() => {
            setcss(props.dis)
        },[])
    const restart = () => {
        props.restart()
    }
    return (
        <div className={props.ccs}>
            <div>
                <button className={"btn btn-outline-secondary"} onClick={restart}
                        style={{float: "left"}}>Back
                </button>
            </div>
            <div>
                <h2>How About !</h2>
                <h1>{props.activity}</h1>
            </div>
            <iframe src={`https://www.bing.com/search?q=${props.activity}`} width="100%" height="800"/>
        </div>
    );
}


export default Result;