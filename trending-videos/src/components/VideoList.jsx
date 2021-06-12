import React from 'react'
import { FcOk } from "react-icons/fc";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function VideoList(props) {
    return (
        <div>
            <Link className="link" to = {`/Video/${props.item.id}/${props.item.snippet.title}/${props.item.statistics.viewCount}/${props.item.statistics.likeCount}/${props.item.statistics.dislikeCount}`}>
            <Row style={{marginTop:"7px",color:'black',textDecoration: "none"}}>
            <Col sm={4} >
                <img src={props.item.snippet.thumbnails.high.url} alt="" width="168" height="94" />
            </Col>
            <Col sm={8} >
                <div style={{ marginLeft: "45px" }}>
                    <h6 >{props.item.snippet.title}</h6>
                    <span style={{ fontSize: "14px" }}>{props.item.snippet.channelTitle}  <FcOk /></span>
                    <br />
                    <span style={{ fontSize: "12px" }}>{props.item.statistics.viewCount}  Views  <FcOk /></span>

                </div>

            </Col>
            </Row>
            </Link>
            </div>
        
    )
}
