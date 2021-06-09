import { Container } from 'react-bootstrap';
import React from 'react';

const About = () => {
    return (
        <div>
            <Container fluid className="text-center mt-5 " >
                <img alt="logo" width="500" src="https://d33wubrfki0l68.cloudfront.net/c6a54be7d89b1ebc31ad2f5558ee470fd4ebd11e/1fb54/institute-images/logo-text-black-centered.png"></img>
                <p className="pt-3 ml-3">
                    All data are from <span><a href="https://www.themoviedb.org/documentation/api">TMDP API</a></span>
                <br/>
                @2021 | Raneen Alzafrani
                </p>
                
            </Container>
        </div>
    );
}

export default About;

