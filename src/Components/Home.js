import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Qoutes from './Qoutes';
import './Style.css'

export default function Home(props) {

    // const [name, setName] = useState(()=>props.namme);
    // const [email, setEmail] = useState("");
    // const [picture, setPicture] = useState(()=> props.pic);

    const [data, setData] = useState([])

    useEffect(() => {
        // setName(localStorage.getItem("name"));
        // setEmail(localStorage.getItem("email"));
        // setPicture(localStorage.getItem("picture"));
        getApi();

        return () => { }
    }, [])

    const getApi = () => {
        axios.get("https://type.fit/api/quotes")
            .then((res) => {
                console.log(res)
                setData(res.data);
            })
    
    }

            
    return (
        <div>
            <img src={props.pic}/>
            <h1>Hi, Wellcom {props.namme} </h1>

            <div className="qoutes text-center" >
            {data.map((item, Index)=> (<Qoutes item={item} key={Index}/>))}
            </div>

        </div>
    )

}
