import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = 'black';
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
