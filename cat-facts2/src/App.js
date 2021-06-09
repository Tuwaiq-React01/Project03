import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fact from './Fact';
import "./App.css"
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      catList:[]
    }
  }
  fetchData(){
    const options = {
      method: 'GET',
      url: 'https://public-holiday.p.rapidapi.com/2019/US',
      headers: {
        'x-rapidapi-key': '2ea66b715bmsh5d95c7269a59d90p15132ajsn5852b4261215',
        'x-rapidapi-host': 'public-holiday.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
}
componentDidMount(){
  this.fetchData();
}
// add component
  render() {
    return (
      <div className="facts">
        {this.state.catList.map((cat) => (
          <Fact fact={cat.text}/>
        ))}
      </div>
    )
  }
}
