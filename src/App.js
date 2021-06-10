import axios from 'axios';
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';
import AddGame from './components/AddGame';
import DeleteGames from './components/DeleteGames';
import GameList from './components/GameList'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      faves: [],
      later: [],
      completed: [],
      ongoing: [],
      selected: [],
      newGameID: 0,
      editing: [],
      token: null
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleCompletedToggle = this.handleCompletedToggle.bind(this);
    this.handleLaterToggle = this.handleLaterToggle.bind(this);
    this.handleOngoingToggle = this.handleOngoingToggle.bind(this);
    this.handleAddGame = this.handleAddGame.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleSelectedDelete = this.handleSelectedDelete.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handleDeleteGame = this.handleDeleteGame.bind(this);
    this.handleEditGame = this.handleEditGame.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    const loadedState = JSON.parse(localStorage.getItem("state"))
    if (loadedState != null && loadedState.games.length > 0) {
      this.setState(loadedState);
    } else {
      const proxyurl = "https://stormy-river-01770.herokuapp.com/";
      const header = {
        "Client-ID": "srw5w4tvue6afnglabbtkbn6ey41w1",
        "Authorization": "Bearer d0cnbrajam2eszk9zxeu5a3bayghqq"
      }
      const body = "fields name;limit 30;"
      axios.post(`${proxyurl}https://api.igdb.com/v4/games`, body, {
        headers: { ...header }
      })
        .then(response => {
          const gameArr = response.data;
          this.setState({
            games: gameArr
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  componentDidUpdate() {
    this.populateStorage()
  }

  populateStorage = () => {
    localStorage.setItem("state", JSON.stringify(this.state));
  }

  handleFaveToggle = (game) => {
    const faves = this.state.faves.slice(); //Get faves array and copy it
    const gameIndex = faves.indexOf(game);
    if (gameIndex === -1) {
      //If game is not in faves
      faves.push(game);
    } else {
      //If game is in faves
      faves.splice(gameIndex, 1);
    }
    this.setState({ faves }); //Update faves state

  }

  handleCompletedToggle = (game) => {
    const completed = this.state.completed.slice(); //Get completed array and copy it
    const gameIndex = completed.indexOf(game);
    const ongoing = this.state.ongoing.slice();
    const gameIndexOngoing = ongoing.indexOf(game);
    const later = this.state.later.slice();
    const gameIndexLater = later.indexOf(game);
    if (gameIndex === -1) {
      //If game is not in completed
      completed.push(game);
    } else {
      //If game is in completed
      completed.splice(gameIndex, 1);
    }

    if (gameIndexOngoing !== -1) {
      ongoing.splice(gameIndexOngoing, 1);
      this.setState({ ongoing })
    }

    if (gameIndexLater !== -1) {
      later.splice(gameIndexLater, 1);
      this.setState({ later })
    }

    this.setState({ completed }); //Update completed state

  }

  handleLaterToggle = (game) => {
    const later = this.state.later.slice(); //Get later array and copy it
    const gameIndex = later.indexOf(game);
    const ongoing = this.state.ongoing.slice();
    const gameIndexOngoing = ongoing.indexOf(game);
    const completed = this.state.completed.slice();
    const gameIndexCompleted = completed.indexOf(game);
    if (gameIndex === -1) {
      //If game is not in later
      later.push(game);
    } else {
      //If game is in later
      later.splice(gameIndex, 1);
    }

    if (gameIndexCompleted !== -1) {
      completed.splice(gameIndexCompleted, 1);
      this.setState({ completed })
    }

    if (gameIndexOngoing !== -1) {
      ongoing.splice(gameIndexOngoing, 1);
      this.setState({ ongoing })
    }

    this.setState({ later }); //Update later state

  }

  handleOngoingToggle = (game) => {
    const ongoing = this.state.ongoing.slice(); //Get ongoing array and copy it
    const gameIndex = ongoing.indexOf(game);
    const completed = this.state.completed.slice();
    const gameIndexCompleted = completed.indexOf(game);
    const later = this.state.later.slice();
    const gameIndexLater = later.indexOf(game);
    if (gameIndex === -1) {
      //If game is not in ongoing
      ongoing.push(game);
    } else {
      //If game is in ongoing
      ongoing.splice(gameIndex, 1);
    }

    if (gameIndexCompleted !== -1) {
      completed.splice(gameIndexCompleted, 1);
      this.setState({ completed })
    }

    if (gameIndexLater !== -1) {
      later.splice(gameIndexLater, 1);
      this.setState({ later })
    }

    this.setState({ ongoing }); //Update ongoing state

  }

  handleAddGame = (game) => {
    const games = this.state.games;
    const gameID = this.state.newGameID;
    games.push({ id: gameID, name: game })
    this.setState({
      games,
      newGameID: gameID + 1
    })

  }


  handleSelected = (game) => {
    const selected = this.state.selected.slice();
    const index = selected.indexOf(game);
    if (index === -1) {
      selected.push(game);
    } else {
      selected.splice(index, 1);
    }

    this.setState({ selected })

  }

  handleSelectedDelete = () => {

    const games = this.state.games.filter(elem => {
      return !this.state.selected.includes(elem)
    })
    const faves = this.state.faves.filter(elem => {
      return !this.state.selected.includes(elem)
    })
    const later = this.state.later.filter(elem => {
      return !this.state.selected.includes(elem)
    })
    const completed = this.state.completed.filter(elem => {
      return !this.state.selected.includes(elem)
    })
    const ongoing = this.state.ongoing.filter(elem => {
      return !this.state.selected.includes(elem)
    })
    const editing = this.state.editing.filter(elem => {
      return !this.state.selected.includes(elem)
    })

    this.setState({
      games,
      faves,
      later,
      completed,
      ongoing,
      selected: [],
      editing
    })

  }

  handleDeleteAll = () => {
    this.setState({
      games: [],
      faves: [],
      later: [],
      completed: [],
      ongoing: [],
      selected: [],
      editing: []
    })

  }

  handleDeleteGame = (game) => {
    const games = this.state.games.slice();
    const faves = this.state.faves.slice();
    const later = this.state.later.slice();
    const completed = this.state.completed.slice();
    const ongoing = this.state.ongoing.slice();
    const selected = this.state.selected.slice();
    const editing = this.state.editing.slice();
    if (games.indexOf(game) > -1) {
      games.splice(games.indexOf(game), 1);
    }
    if (faves.indexOf(game) > -1) {
      faves.splice(faves.indexOf(game), 1);
    }
    if (later.indexOf(game) > -1) {
      later.splice(later.indexOf(game), 1);
    }
    if (completed.indexOf(game) > -1) {
      completed.splice(completed.indexOf(game), 1);
    }
    if (ongoing.indexOf(game) > -1) {
      ongoing.splice(ongoing.indexOf(game), 1);
    }
    if (selected.indexOf(game) > -1) {
      selected.splice(selected.indexOf(game), 1);
    }
    if (editing.indexOf(game) > -1) {
      editing.splice(editing.indexOf(game), 1);
    }

    this.setState({
      games,
      faves,
      later,
      completed,
      ongoing,
      selected,
      editing
    })
  }

  handleEditGame = (oldGame, newGameName) => {
    const newGame = oldGame;
    newGame.name = newGameName;
    const games = this.state.games.slice()
    const faves = this.state.faves.slice();
    const later = this.state.later.slice();
    const completed = this.state.completed.slice();
    const ongoing = this.state.ongoing.slice();
    const selected = this.state.selected.slice();
    const editing = this.state.editing.slice();
    if (games.indexOf(oldGame) > -1) {
      games.splice(games.indexOf(oldGame), 1, newGame);
    }
    if (faves.indexOf(oldGame) > -1) {
      faves.splice(faves.indexOf(oldGame), 1, newGame);
    }
    if (later.indexOf(oldGame) > -1) {
      later.splice(later.indexOf(oldGame), 1, newGame);
    }
    if (completed.indexOf(oldGame) > -1) {
      completed.splice(completed.indexOf(oldGame), 1, newGame);
    }
    if (ongoing.indexOf(oldGame) > -1) {
      ongoing.splice(ongoing.indexOf(oldGame), 1, newGame);
    }
    if (selected.indexOf(oldGame) > -1) {
      selected.splice(selected.indexOf(oldGame), 1, newGame);
    }
    if (editing.indexOf(oldGame) > -1) {
      editing.splice(editing.indexOf(oldGame), 1, newGame);
    }
    this.setState({
      games,
      faves,
      later,
      completed,
      ongoing,
      selected,
      editing
    })

  }

  handleEdit = (game) => {
    const editing = this.state.editing.slice();
    if (editing.includes(game)) {
      editing.splice(editing.indexOf(game), 1);
    } else {
      editing[0] = game;
    }
    this.setState({ editing })

  }
  responseFacebook = (response) => {
    if (response.status !== "unknown") {
      console.log(response);
      this.setState({ token: response.accessToken })
    }
    else {
      console.log("unknown response")
    }
  }


  render() {
    return (




      <div>
        {this.state.token ?
          (<div className="">
            <div className="top-bar container-fluid">
              <div className="row justify-content-evenly">
                <AddGame handleAddGame={this.handleAddGame} />
                <DeleteGames handleSelectedDelete={this.handleSelectedDelete} handleDeleteAll={this.handleDeleteAll} />
              </div>
            </div>
            <GameList games={this.state.games} faves={this.state.faves} later={this.state.later}
              completed={this.state.completed} ongoing={this.state.ongoing} selected={this.state.selected}
              editing={this.state.editing} handleFaveToggle={this.handleFaveToggle}
              handleCompletedToggle={this.handleCompletedToggle} handleLaterToggle={this.handleLaterToggle}
              handleOngoingToggle={this.handleOngoingToggle} handleSelected={this.handleSelected}
              handleDeleteGame={this.handleDeleteGame} handleEditGame={this.handleEditGame} handleEdit={this.handleEdit}
            />
          </div>) :
          <FacebookLogin
            appId="137347345042510"
            autoLoad={false}
            callback={this.responseFacebook} />
        }
      </div>


    );
  }
}




export default App;
