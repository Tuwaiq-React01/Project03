import React, { Component } from 'react'
import { ReactComponent as ReactLogo } from '../icons/edit.svg'

export default class EditButton extends Component {
    render() {
        return (
            <div className="edit" onClick={this.props.handleEdit} >
                <ReactLogo />
            </div>
        )
    }
}
