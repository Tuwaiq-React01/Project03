import './index.css';
import App from './App';
import React from 'react';
import Login from '/Users/nadaalotaibi/project3/src/Login.js';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import List from '/Users/nadaalotaibi/project3/src/List.js';
import PageNotFound from './PageNotFound'
import {Route,Link,BrowserRouter as Router, Switch} from 'react-router-dom'

ReactDOM.render(
  
  <Router>
    <center>  
    <div>
          <nav>
            <ul>
 <center><img className="photo" src  = "https://www.hipi.info/wp-content/uploads/2015/07/tom-and-jerry-facebook-cover-01.jpg" alt= ""></img></center> 

<button type="button" class="btn btn-outline-warning"><Link to= "./">Movie list</Link></button>

<button type="button" class="btn btn-outline-warning"><Link to= "./List">Movie tom and jerry chosen for you!</Link></button>
<button type="button" class="btn btn-outline-warning"><Link to= "./Login">Log in</Link></button>


</ul>
 </nav>


<Switch>

    <Route  exact path= '/List'>
       <List />
    </Route> 
   
    <Route exact  path="/Login" >
      <Login/>
      </Route> 

    <Route exact path= '/' > 
    <App />
    </Route>   

    <Route exact path= '/PageNotFound'>
      <PageNotFound></PageNotFound>
    </Route>


    if(<Route exact path = '/PageNotFound'></Route>){
 <center><PageNotFound></PageNotFound>  </center>
    }
   
  
    
    </Switch>
    </div>
    </center>  

      </Router>,
      
      document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
