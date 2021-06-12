import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Route, Redirect, Link, useParams } from "react-router-dom";
import VideoList from './VideoList'

import { AiOutlineLike ,AiOutlineDislike} from "react-icons/ai";


export default function SelectedVideo(props) {
    const { id, title, viewCount, likeCount, dislikeCount } = useParams()


    const videoSrc = `https://www.youtube.com/embed/${id}`;
    console.log("props.videos", props.videos)
    var VideoListitems = props.videos.map((item, i) => {
        return <VideoList item={item} />
    })
    return (


        <div>

            <Container style={{ marginTop: "50px" }}>
                <Row>
                    <Col sm={8}>
                        <iframe src={videoSrc} allowFullScreen title="Video player" width="750px" height="450px" />

                        <h4 style={{ marginTop: "15px" }}>{title}</h4>
                        <Container>
                            <Row>
                                <Col><span>{viewCount} views</span></Col>
                                <Col style={{marginLeft:"150px"}}>
                                <AiOutlineLike/> {likeCount}  &nbsp; &nbsp; &#160; <AiOutlineDislike/> {dislikeCount}
                                </Col>
                            </Row>
                        </Container>

                        <hr />
                    </Col>

                    <Col sm={4} >

                        <Container style={{ marginLeft: "50px", marginTop: "19px", width: "380px" }} >
                            <Row>
                                {VideoListitems}

                            </Row>
                        </Container>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
