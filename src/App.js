import logo from './SFCSP.png';
import './App.css';
import Wheel from './Wheel.js'
import Item from './Item.js';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

let theColors = ["#f82", "#0bf", "#fb0", "#0fb", "#b0f", "#f0b", "#bf0"]
let labels = ["1", "2", "3", "4", "5", "6", "7"]

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      labls: labels,
      sectors: [],
      newItem: "",
      itemsList: [],
      showWheel: false,
      OKClicked: false,
      data: []
    }
    this.setColor = this.setColor.bind(this);
  }

  componentDidMount() {
    // let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // let length = 20;
    // this.callApi(randomColor, length);
  }

  async callApi(randomColor, length) {
    axios({
      method: "get",
      url: "/scheme?hex="+randomColor+"&mode=analogic&count="+ length,     
    }).then((response) => {
      console.log("Inside the response!!!")
      console.log(response.data);
      this.setState({
        data: response.data.colors
      })

    }).catch((error) => {
      console.log(error);
    })    
  }

  onChangeText(e) {
    this.setState({
      newItem: e.target.value
    })
  }

  addTheItem(e) {
    e.preventDefault();

    this.setState({
      itemsList: this.state.itemsList.concat(this.state.newItem),
      newItem: ""
    })
  }

  setColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  showWheel(e) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let length = this.state.itemsList.length;
    //console.log("random color:  "+randomColor);
    this.callApi(randomColor, length);
    console.log("this.state.data.length");
    console.log(this.state.data.length);
    this.setState({
      showWheel: true,
      OKClicked: true
    })
  }

  hideWheel(e) {
    this.setState({
      showWheel: false,
      itemsList: [],
      OKClicked: false
    })
  }

  render() {
    let itemsList = this.state.itemsList.map((element, index) => (
      <Item item={element} key={index} />
    ))
    console.log(this.state.showWheel && (this.state.data.length == this.state.itemsList.length));

    console.log(this.state.showWheel);
    console.log(this.state.data.length);
    console.log(this.state.itemsList.length);
    
    return (
      <div className="App">
        <div className="App-header">
          <h1 class="display-4 text-muted">Tuwaiq Random Picker</h1>
          <img src={logo} width="130" height="100" class="rounded mx-auto d-block mb-4" />
          {this.state.OKClicked ? null :
            <div>
              {itemsList}
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                </div>
                <input type="text" placeholder="Add your item here!!" onChange={(e) => this.onChangeText(e)} value={this.state.newItem} class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-default" />
              </div>
              <button type="button" className="btn btn-warning" onClick={(e) => this.state.newItem !== "" ? this.addTheItem(e) : null}>ADD</button>
              <button type="button" className="btn btn-warning mx-3" onClick={(e) => this.state.itemsList.length < 2 ? null : this.showWheel(e)}>SPIN</button>
            </div>
          }
          <div>
            {(this.state.showWheel && (this.state.data.length == this.state.itemsList.length)) ? <Wheel itemsList={this.state.itemsList} colors={this.state.data} /> : null}
          </div>
          <button type="button" className="btn btn-danger mt-3" onClick={(e) => this.hideWheel(e)}>Restart</button>
        </div>
      </div>
    )
  }
}
