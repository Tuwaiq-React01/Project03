import "./App.css";
// import NavBar from "./components/NavBar";
import Favorite from "./components/Favorite";
import Footer from "./components/Footer";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllGames from "./components/AllGames";
import Search from "./components/Search";
import HomePage from "./components/HomePage";
import { MdGames } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

function App() {
  // let games = [
  //   { gameName: "gta", id: 1 },
  //   { gameName: "bocw", id: 2 },
  //   { gameName: "cod", id: 3 },
  //   { gameName: "mw3", id: 4 },
  //   { gameName: "mw2", id: 5 },
  // ];
  const [fav, setFav] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const addToFav = (game) => {
    console.log(game);
    var search = fav.find((e) => game.id == e.id);
    if (search) {
      alert("ALREADY THERE!");
    } else {
      setFav([...fav, game]);
    }
  }

  const removeAll = () => {
    setFav([]);
  }
  const removeFav = (game) =>  {
    // let newArr = fav.splice(game, 1)
    // setFav([newArr]);
  }

  const searchButton = () => {
    // console.log("test");
  }

  return (
    <>
      <Router>
        <div>
          <nav
            class="navbar navbar-expand-lg navbar-dark bg-primary"
            style={{ fontFamily: "Mate SC, serif", fontSize: "22px" }}
          >
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                Game
              </a>
              <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                  <li class="nav-item mx-4">
                    <Link className="nav-link" to="/">
                      <AiFillHome size={30} /> Home
                    </Link>
                  </li>
                  <li class="nav-item mx-4">
                    <Link className="nav-link" to="/games">
                      <MdGames size={30} /> Games
                    </Link>
                  </li>
                  <li class="nav-item mx-4">
                    <Link className="nav-link" to="/favorites">
                      <BsFillHeartFill size={30} /> Favorites
                      <span class="badge rounded-pill bg-secondary mx-2">
                        {fav.length}
                      </span>{" "}
                    </Link>
                  </li>
                  <li class="nav-item mx-4">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li></li>
                </ul>
                <form class="d-flex">
                  <input
                    class="form-control me-sm-2 m-2"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearchInput(e.target.value)}
                  />

                  <Link className="nav-link" to="/search">
                    <button
                      class="btn btn-secondary my-2 my-sm-0"
                      type="submit"
                      onClick={searchButton}
                    >
                      Search
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </nav>

          <Switch>
            <Route exact path="/" render={() => <HomePage />} />

            <Route
              exact
              path="/games"
              render={() => <AllGames addToFav={addToFav} />}
            />
            <Route
              path="/favorites"
              render={() => (
                <Favorite
                  favs={fav}
                  removeFav={removeFav}
                  removeAll={removeAll}
                />
              )}
            />

            <Route
              path="/search"
              render={() => <Search target={searchInput} addToFav={addToFav} />}
            />
          </Switch>
        </div>
      </Router>

      <Footer />
    </>
  );
}

export default App;
