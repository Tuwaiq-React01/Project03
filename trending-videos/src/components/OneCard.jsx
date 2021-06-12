import React from 'react'
import { Button,Container,Row,Col } from 'react-bootstrap';
import { FcOk } from "react-icons/fc";
import { Link } from "react-router-dom";
import '../App.css'



export default function OneCard(props) {
    const  descrption = props.item.snippet.description
    const date = props.item.snippet.publishedAt.substr(0, 10)

    if(descrption.length>150){
      var newdescrption =  descrption.substr(0, 97) + ' ...'
    }
    return (
        <div className="App" style={{marginTop:"19px"}}>
            <Link className="link" to = {`/Video/${props.item.id}/${props.item.snippet.title}/${props.item.statistics.viewCount}/${props.item.statistics.likeCount}/${props.item.statistics.dislikeCount}`}>
            <Container  >
           
                
                
                <Row>
                    <Col sm={4} style={{textAlign:'right'}}>
                        
                        <img src={props.item.snippet.thumbnails.high.url} alt=""  width="246px" height="138px"/>
                    </Col>
                    <Col sm={8} style={{textAlign:'left'}}>
                    <h4 >{props.item.snippet.title}</h4>
                        <p><span style={{fontWeight: "bold"}}>{props.item.snippet.channelTitle} </span><FcOk/>  views : {props.item.statistics.viewCount}   Date: {date}   </p>
                         <p>{newdescrption}</p>

                    </Col>
                </Row>
                
                
                <hr/>
            </Container>
            </Link>
            
        </div>
    )
}
