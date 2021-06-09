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
    axios.get("https://cat-fact.herokuapp.com/facts"
    ).then((response)=>{
      this.setState({
        catList:response.data
      });
  })
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
