import axios from 'axios';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import  React1,{ useState,useEffect } from 'react';



export default function List (res) {
    const [movie, setmovie] = useState([]);
    const [image, setimage] = useState("/loading.gif")
    useEffect(() => {
      getmovie()
      }, [])
  
    const getmovie= () =>{
        axios.get("http://www.omdbapi.com/?s=tom%20and%20jerry&apikey=d4902665")
        .then((res)=>{
            setmovie(res.data.Search)
            setimage(res.data.Search[Math.floor(Math.random() *10 )].Poster)

        }).catch((err) => {
                console.log("error", err);
            })
        }

        return (
            <h1>
            <Col sm={10} md={12} lg={3} >
            <Card>
                <Card.Img variant="top" src={image} />
            </Card>
            </Col>
            </h1>
        )
    }