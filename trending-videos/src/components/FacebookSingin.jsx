import React, { useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Container, Row, Col } from 'react-bootstrap';



export default function FacebookSingin(props) {


    const [name, setname] = useState("");
    const [token, settoken] = useState("")

    const responseFacebook = (response) => {
        if (response.status !== "unknown") {

            console.log(response);
            setname(response.name)
            props.setusername(response.name)
            localStorage.setItem("name",response.name)
            localStorage.setItem("token",response.accessToken)
            window.location.reload()
  
            settoken(response.accessToken)
        } else {
            console.log("nuknow response")

        }


    }

    return (
        <div>
            <Container className='App'>

                <Row>
                    <Col></Col>
                    <Col style={{marginTop:"200px"}} xs={8}>
                        <FacebookLogin
                            appId="4482528428458810"
                            autoLoad={false}
                            fields="name"

                            callback={responseFacebook} />

                        {localStorage.getItem("token") ?
                            <div>
                                <h3>Welcome : {localStorage.getItem("name")}</h3>


                            </div>
                            : null
                        }

                       
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

