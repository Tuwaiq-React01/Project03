import React, { Component } from 'react'

export default class Select extends Component {
    render() {
        return (
            <div className="select">
            <input type="checkbox" checked={this.props.isSelected} onChange={this.props.handleSelected}></input>
            </div>
        )
    }
}
