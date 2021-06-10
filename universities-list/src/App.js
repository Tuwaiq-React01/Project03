import './App.css';
import Home from './Home'
import Login from './components/Login';
import About from './components/About';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MyNavBar from './components/MyNavBar';

function App() {

  const [universities, setUniversities] = useState([])

  useEffect(() => {
    getUni();
  }, [])  

  const getUni = () => {
    axios.get(`http://universities.hipolabs.com/search?country=United+States`)
      .then(res => {
        
        setUniversities([...res.data])
      })
  }
  return (
    <div className="row">
      <Router>
        <MyNavBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" >
            <Home universities={universities} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;