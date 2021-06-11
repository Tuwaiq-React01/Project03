import React from 'react'
import { Link } from 'react-router-dom'
import FormInput from './FormInput'
export default function Home() {
    const logout = () => {
        localStorage.clear();
        window.location.reload()
    }
    return (
        <div>
            <nav>


                <Link to="/" style={{ margin: "2rem" }}>Home</Link>


                <Link to="/Contact" style={{ margin: "2rem" }}>Contact</Link>
                <Link to="/About" style={{ margin: "2rem" }}>About</Link>

                <Link to="/" style={{ margin: "2rem" }} onClick={logout}>Logout from {localStorage.getItem("email")}</Link>
            </nav>
            <div style={{ backgroundColor: "#F4A261" }}>
                <div style={{
                    paddingBlock: "5rem"
                }}>
                    <h2 style={{ textAlign: "center" }}>Hi {localStorage.getItem("name")}, let me guess your look from your name</h2>
                    <div style={{
                        margin: "10px"
                    }}>
                    </div>
                </div>
                <FormInput />
            </div>
        </div>
    )
}
