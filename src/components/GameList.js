
import React, { useEffect, useState } from 'react';
import GameRow from "./GameRow";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';





export default function GameList(props) {

    const [filter, setFilter] = useState(() => "all")

    useEffect(() => {
        console.log("Changing Filter")
    }, [filter])

    const handleFilterClick = (filter) => {
        setFilter(filter)
    }

    const allGames = props.games.map((game, index) => {
        return <GameRow key={index} game={game}
            handleFaveToggle={() => props.handleFaveToggle(game)} isFave={props.faves.includes(game)}
            handleCompletedToggle={() => props.handleCompletedToggle(game)} isCompleted={props.completed.includes(game)}
            handleLaterToggle={() => props.handleLaterToggle(game)} isLater={props.later.includes(game)}
            handleOngoingToggle={() => props.handleOngoingToggle(game)} isOngoing={props.ongoing.includes(game)}
            handleSelected={() => props.handleSelected(game)} isSelected={props.selected.includes(game)}
            handleDeleteGame={() => props.handleDeleteGame(game)} handleEditGame={props.handleEditGame}
            handleEdit={() => props.handleEdit(game)} isEditing={props.editing.includes(game)}
        />
    })

    const faveGames = props.faves.map((game, index) => {
        return <GameRow key={index} game={game}
            handleFaveToggle={() => props.handleFaveToggle(game)} isFave={props.faves.includes(game)}
            handleCompletedToggle={() => props.handleCompletedToggle(game)} isCompleted={props.completed.includes(game)}
            handleLaterToggle={() => props.handleLaterToggle(game)} isLater={props.later.includes(game)}
            handleOngoingToggle={() => props.handleOngoingToggle(game)} isOngoing={props.ongoing.includes(game)}
            handleSelected={() => props.handleSelected(game)} isSelected={props.selected.includes(game)}
            handleDeleteGame={() => props.handleDeleteGame(game)} handleEditGame={props.handleEditGame}
            handleEdit={() => props.handleEdit(game)} isEditing={props.editing.includes(game)}
        />
    })

    const completedGames = props.completed.map((game, index) => {
        return <GameRow key={index} game={game}
            handleFaveToggle={() => props.handleFaveToggle(game)} isFave={props.faves.includes(game)}
            handleCompletedToggle={() => props.handleCompletedToggle(game)} isCompleted={props.completed.includes(game)}
            handleLaterToggle={() => props.handleLaterToggle(game)} isLater={props.later.includes(game)}
            handleOngoingToggle={() => props.handleOngoingToggle(game)} isOngoing={props.ongoing.includes(game)}
            handleSelected={() => props.handleSelected(game)} isSelected={props.selected.includes(game)}
            handleDeleteGame={() => props.handleDeleteGame(game)} handleEditGame={props.handleEditGame}
            handleEdit={() => props.handleEdit(game)} isEditing={props.editing.includes(game)}
        />
    })

    const laterGames = props.later.map((game, index) => {
        return <GameRow key={index} game={game}
            handleFaveToggle={() => props.handleFaveToggle(game)} isFave={props.faves.includes(game)}
            handleCompletedToggle={() => props.handleCompletedToggle(game)} isCompleted={props.completed.includes(game)}
            handleLaterToggle={() => props.handleLaterToggle(game)} isLater={props.later.includes(game)}
            handleOngoingToggle={() => props.handleOngoingToggle(game)} isOngoing={props.ongoing.includes(game)}
            handleSelected={() => props.handleSelected(game)} isSelected={props.selected.includes(game)}
            handleDeleteGame={() => props.handleDeleteGame(game)} handleEditGame={props.handleEditGame}
            handleEdit={() => props.handleEdit(game)} isEditing={props.editing.includes(game)}
        />
    })

    const ongoingGames = props.ongoing.map((game, index) => {
        return <GameRow key={index} game={game}
            handleFaveToggle={() => props.handleFaveToggle(game)} isFave={props.faves.includes(game)}
            handleCompletedToggle={() => props.handleCompletedToggle(game)} isCompleted={props.completed.includes(game)}
            handleLaterToggle={() => props.handleLaterToggle(game)} isLater={props.later.includes(game)}
            handleOngoingToggle={() => props.handleOngoingToggle(game)} isOngoing={props.ongoing.includes(game)}
            handleSelected={() => props.handleSelected(game)} isSelected={props.selected.includes(game)}
            handleDeleteGame={() => props.handleDeleteGame(game)} handleEditGame={props.handleEditGame}
            handleEdit={() => props.handleEdit(game)} isEditing={props.editing.includes(game)}
        />
    })
    return (
        <div>
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <Link className={`col-sm game-filter ${filter === "all" ? "is-active" : ""}`} onClick={() => handleFilterClick('all')} to="/">
                        <div>
                            All
                            <span className="game-count">{props.games.length}</span>
                        </div>
                        </Link>
                        <Link className={`col-sm game-filter ${filter === "faves" ? "is-active" : ""}`} onClick={() => handleFilterClick('faves')} to="Favorites">
                        <div>
                            Favorites
                            <span className="game-count">{props.faves.length}</span>
                        </div>
                        </Link>
                        <Link className={`col-sm game-filter ${filter === "completed" ? "is-active" : ""}`} onClick={() => handleFilterClick('completed')} to="Completed">
                        <div>
                            Completed
                            <span className="game-count">{props.completed.length}</span>
                        </div>
                        </Link>
                        <Link className={`col-sm game-filter ${filter === "later" ? "is-active" : ""}`} onClick={() => handleFilterClick('later')} to="Later">
                            <div>
                                Later
                            <span className="game-count">{props.later.length}</span>
                            </div>
                        </Link>
                        <Link className={`col-sm game-filter ${filter === "ongoing" ? "is-active" : ""}`} onClick={() => handleFilterClick('ongoing')} to="Ongoing">
                            <div>
                                Ongoing
                            <span className="game-count">{props.ongoing.length}</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <Route exact path="/">{allGames}</Route>
                <Route exact path="/Favorites">{faveGames}</Route>
                <Route exact path="/Completed">{completedGames}</Route>
                <Route exact path="/Later">{laterGames}</Route>
                <Route exact path="/Ongoing" >{ongoingGames}</Route>
            </Router>
        </div>
    )
}
