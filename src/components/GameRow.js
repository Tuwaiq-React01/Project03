import React, { Component } from 'react'
import Completed from './Completed'
import Delete from './Delete'
import EditButton from './EditButton'
import EditGame from './EditGame'
import Fave from './Fave'
import Later from './Later'
import Ongoing from './Ongoing'
import Select from './Select'

export default class GameRow extends Component {

    render() {

        return (
            <div className="game-row">
                <h2>{this.props.game.name}</h2>
                <div className="container-fluid">
                    <div className="row">
                        <Select handleSelected={this.props.handleSelected} isSelected={this.props.isSelected} />
                        <Fave handleFaveToggle={this.props.handleFaveToggle} isFave={this.props.isFave} />
                        <Completed handleCompletedToggle={this.props.handleCompletedToggle} isCompleted={this.props.isCompleted} />
                        <Later handleLaterToggle={this.props.handleLaterToggle} isLater={this.props.isLater} />
                        <Ongoing handleOngoingToggle={this.props.handleOngoingToggle} isOngoing={this.props.isOngoing} />
                        <Delete handleDeleteGame={this.props.handleDeleteGame} handleEditOff={this.handleEditOff} />
                        <EditButton handleEdit={this.props.handleEdit} />
                    </div>
                    {this.props.isEditing? <EditGame handleEditGame={this.props.handleEditGame} game={this.props.game} /> : ""}
                </div>
            </div>
        )
    }
}



