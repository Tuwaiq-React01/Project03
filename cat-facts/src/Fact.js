import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./fact.css"
export default class Fact extends Component {
    render() {
        return (
            <div className="card fact-card">
                {this.props.fact}
            </div>
        )
    }
}
