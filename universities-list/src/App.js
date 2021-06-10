import logo from './logo.svg';
import './App.css';
import Nav from './components/MyNavBar';
import Home from './Home'
import Login from './components/Login';
import About from './components/About';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MyNavBar from './components/MyNavBar';

function App() {

  //hooks
  const [universities, setUniversities] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    alert(`Semilar Universities as ${searchInput}`)
  }, [universities]) //RERENDER 

  //function and var
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://universities.hipolabs.com/search?country=United+States&query=${searchInput}`)
      .then(res => {
        console.log(res.data);
        setUniversities([...res.data])
      })
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value)
  }

  return (
    <div className="row">
      <Router>
        <MyNavBar />
        <Switch>
          <Route exact path="./components/Login" component={Login} />
          <Route exact path="/components/About" component={About} />
          <Route exact path="/" >
            <Home universities={universities} handleSubmit={handleSubmit} handleChange={handleChange}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;