import React, { useState, useEffect } from 'react'
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";



export default function Nav(props) {
    const [flag, setflag] = useState(false)
    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            setflag(true)
        } else {
            setflag(false)

        }
    }, [flag])


    const logout = () => {
        localStorage.clear();
        window.location.reload()
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>

                    <Link className="link" style={{ color: "white", fontSize: "20px" }} to={"/"}>Home</Link>

                    <Navbar.Collapse >
                        <Container>
                            <Navbar.Text>
                                <Link className="link" to={"/Videos"}>Videos</Link>
                            </Navbar.Text>
                        </Container>
                        {flag ?
                            <Navbar.Text>
                                <Link className="link" style={{ marginLeft: "-180px" }} to={"/SignInFacebook"}>Sign In With Facebook </Link>
                            </Navbar.Text>
                            :
                            <Navbar.Text style={{ marginLeft: "-250px" }}>

                                {localStorage.getItem("name")}
                                <Link className="link" onClick={logout}> logout</Link>
                            </Navbar.Text>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>


    )
}
