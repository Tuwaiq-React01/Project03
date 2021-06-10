import React, { Component } from 'react'
import {ReactComponent as ReactLogo} from '../icons/correct-mark.svg'

export default class Completed extends Component {
    render() {
        return (
            <div className={`completed ${this.props.isCompleted? "is-completed" : ""}`} onClick={this.props.handleCompletedToggle} >
            <ReactLogo />
            </div>
        )
    }
}
