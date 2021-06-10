import React, { Component } from 'react'
import {ReactComponent as ReactLogo} from '../icons/operation.svg'

export default class Ongoing extends Component {
    render() {
        return (
            <div className={`ongoing ${this.props.isOngoing? "is-ongoing" : ""}`} onClick={this.props.handleOngoingToggle} >
            <ReactLogo />
            </div>
        )
    }
}
