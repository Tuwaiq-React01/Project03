import React, { Component } from 'react'

export default class DeleteGames extends Component {
    render() {
        return (
            <div className="col-4">
                <button className="input btn btn-warning w-50" onClick={this.props.handleSelectedDelete}>Delete Selected games</button>
                <button className="input btn btn-danger w-50" onClick={this.props.handleDeleteAll}>Delete All games</button>
            </div>

        )
    }
}
