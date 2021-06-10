import React, { Component } from 'react'
import {ReactComponent as ReactLogo} from '../icons/queue.svg'

export default class Later extends Component {
    render() {
        return (
            <div className={`later ${this.props.isLater? "is-later" : ""}`} onClick={this.props.handleLaterToggle} >
            <ReactLogo />
            </div>
        )
    }
}
