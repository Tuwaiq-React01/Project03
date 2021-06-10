import React, { Component } from 'react'

export default class AddGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        }
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value })
    }

    addGame = (e, input) => {
        e.preventDefault()
        if (input === null || input.match(/^\s*$/) !== null) {
            
        } else {
            this.setState({ input: "" })
            this.props.handleAddGame(input);
        }

    }

    render() {
        return (
            <div className="col-4">
                <form className="input-group input">
                    <input className="input w-50" type="text" value={this.state.input} onChange={this.handleChange} placeholder="Enter game to add" required />
                    <button className="btn btn-success w-50" onClick={(e) => this.addGame(e, this.state.input)}>Add game to list!</button>
                </form>
            </div>
        )
    }
}
