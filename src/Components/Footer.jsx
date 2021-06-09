import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="light" style={{ position: "fixed", bottom: "0", width: "100%", background: "black" }} >
                <p style={{ textAlign: "center", color: "#a8a8a8", marginTop:"10px" }} >@2021 | Raneen Alzafarani</p>
            </footer>
        );
    }
}

export default Footer;
