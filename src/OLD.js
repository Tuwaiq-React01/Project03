import React, { Component } from 'react'
import axios from 'axios'
export default class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "",
            value: "",
            isChanged: false

        };

        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.requestImage();
    }
    requestImage() {
        axios({
            method: "get",
            url: this.props.url + this.state.value + this.props.extension
        }).then((response) => {
            //console.log("res", response.config.url)
            this.setState({
                img: response.config.url
            })
        }).catch((e) => {
            console.log("Error!", e)
        })
    }
    handleChange(event) {

        this.setState({
            value: event.target.value,
            isChanged: true
        });
    }
    componentDidUpdate() {
        if (this.state.isChanged) {
            //console.log("INSIDE THE UPDATE!");
            this.setState({
                isChanged: false
            });
            this.requestImage();
        }
    }

    render() {
        return (

            <div>

                <div style={{
                    paddingBlock: "5rem"
                }}>
                    <h2 style={{ textAlign: "center" }}>Hi, let me guess your look from your name</h2>
                    <div style={{
                        margin: "10px"
                    }}>

                    </div>
                    <div style={{
                        backgroundColor: "#264653"
                    }}>
                        <div
                            style={{
                                backgroundColor: "#E76F51"
                            }}>
                            <h3>Please enter your name:</h3>
                        </div>
                        <input id="input" onChange={this.handleChange} value={this.state.value}
                            style={{
                                width: "25rem", height: "4rem", border: "3px solid black",
                                display: "block", margin: "auto", textAlign: "center",
                                fontSize: "150%"
                            }}>

                        </input>
                    </div>

                    <h4> The API used:</h4>

                    <div style={{ backgroundColor: "#E9C46A" }}>
                        {this.props.url + "" + this.state.value + "" + this.props.extension}
                    </div>

                </div>
                <div style={{
                    backgroundColor: "white"
                }}>
                    <img src={this.state.img} alt="Your" style={{
                        display: "block",
                        margin: "auto",
                        width: "10%"
                    }}></img>
                </div>
            </div>
        )
    }
}
