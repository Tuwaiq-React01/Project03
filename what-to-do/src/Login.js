import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FacebookLogin from 'react-facebook-login'

import "./Login.css"

function Login() {
    const responseFacebook = (response) => {
        if (response.status !== "unknown") {
            window.location.href = "/home";

        } else {
            console.log("you are not singned in");
        }
    }

    return (
        <div className="Login">
            <Form>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                    />
                </Form.Group>
                <Button block size="lg">
                    Login
                </Button>
                <FacebookLogin
                    appId="543406996820708"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}/>
            </Form>

        </div>
    );
}

export default Login;