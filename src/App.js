import logo from './SFCSP.png';
import './App.css';
import Wheel from './Wheel.js'
import Item from './Item.js';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Navbar from './Navbar';
import { useEffect, useState } from 'react'


export default function App() {
  const [colors, setColors] = useState([])
  const [labels, setLabels] = useState([])
  const [sectors, setSectors] = useState([])
  const [newItem, setNewItem] = useState("")
  const [itemsList, setItemsList] = useState([])
  const [showWheel, setShowWheel] = useState(false)
  const [OKClicked, setOKClicked] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    console.log("useEffect");
  }, [])

  const callApi = (randomColor, length) => {
    axios({
      method: "get",
      url: "/scheme?hex=" + randomColor + "&mode=analogic&count=" + length,
    }).then((response) => {
      console.log("Inside the response!!!")
      console.log(response.data);
      setData(response.data.colors)


    }).catch((error) => {
      console.log(error);
    })
  }

  const addTheItem = (e) => {
    e.preventDefault();
    setItemsList(itemsList.concat(newItem))
    setNewItem("")
  }

  const setColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  const showTheWheel = (e) => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let length = itemsList.length;
    callApi(randomColor, length);
    setShowWheel(true)
    setOKClicked(true)
  }

  const hideWheel = (e) => {
    setShowWheel(false)
    setItemsList([])
    setOKClicked(false)
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="App">
        <div className="App-header">
          <h1 className="display-4 text-muted">Tuwaiq Random Picker</h1>
          <img src={logo} width="130" height="100" className="rounded mx-auto d-block mb-4" />
          {OKClicked ? null :
            <div>
              {itemsList.map((element, index) => (
                <Item item={element} key={index} />
              ))}
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                </div>
                <input type="text" placeholder="Add your item here!!" onChange={(e) => setNewItem(e.target.value)} value={newItem} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-default" />
              </div>
              <button type="button" className="btn btn-warning" onClick={(e) => newItem !== "" ? addTheItem(e) : null}>ADD</button>
              <button type="button" className="btn btn-warning mx-3" onClick={(e) => itemsList.length < 2 ? null : showTheWheel(e)}>SPIN</button>
            </div>
          }
          <div>
            {(showWheel && (data.length == itemsList.length)) ? <Wheel itemsList={itemsList} colors={data} /> : null}
          </div>
          <button type="button" className="btn btn-danger mt-3" onClick={(e) => hideWheel(e)}>Restart</button>
        </div>
      </div>
    </div>
  )
}

/////////////////////////////////////////////////////////////////////
// export default className App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       colors: [],
//       labls: labels,
//       sectors: [],
//       newItem: "",
//       itemsList: [],
//       showWheel: false,
//       OKClicked: false,
//       data: []
//     }
//     this.setColor = this.setColor.bind(this);
//   }


//   async callApi(randomColor, length) {
//     axios({
//       method: "get",
//       url: "/scheme?hex=" + randomColor + "&mode=analogic&count=" + length,
//     }).then((response) => {
//       console.log("Inside the response!!!")
//       console.log(response.data);
//       this.setState({
//         data: response.data.colors
//       })

//     }).catch((error) => {
//       console.log(error);
//     })
//   }

//   onChangeText(e) {
//     this.setState({
//       newItem: e.target.value
//     })
//   }

//   addTheItem(e) {
//     e.preventDefault();

//     this.setState({
//       itemsList: this.state.itemsList.concat(this.state.newItem),
//       newItem: ""
//     })
//   }

//   setColor() {
//     return Math.floor(Math.random() * 16777215).toString(16);
//   }

//   showWheel(e) {
//     let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     let length = this.state.itemsList.length;
//     this.callApi(randomColor, length);
//     console.log("this.state.data.length");
//     console.log(this.state.data.length);
//     this.setState({
//       showWheel: true,
//       OKClicked: true
//     })
//   }

//   hideWheel(e) {
//     this.setState({
//       showWheel: false,
//       itemsList: [],
//       OKClicked: false
//     })
//   }

//   render() {
//     let itemsList = this.state.itemsList.map((element, index) => (
//       <Item item={element} key={index} />
//     ))
//     console.log(this.state.showWheel && (this.state.data.length == this.state.itemsList.length));

//     console.log(this.state.showWheel);
//     console.log(this.state.data.length);
//     console.log(this.state.itemsList.length);

//     return (
//       <div className="App">
//         <div className="App-header">
//           {/* <Navbar></Navbar> */}
//           <h1 className="display-4 text-muted">Tuwaiq Random Picker</h1>
//           <img src={logo} width="130" height="100" className="rounded mx-auto d-block mb-4" />
//           {this.state.OKClicked ? null :
//             <div>
//               {itemsList}
//               <div className="input-group input-group-sm mb-3">
//                 <div className="input-group-prepend">
//                 </div>
//                 <input type="text" placeholder="Add your item here!!" onChange={(e) => this.onChangeText(e)} value={this.state.newItem} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-default" />
//               </div>
//               <button type="button" className="btn btn-warning" onClick={(e) => this.state.newItem !== "" ? this.addTheItem(e) : null}>ADD</button>
//               <button type="button" className="btn btn-warning mx-3" onClick={(e) => this.state.itemsList.length < 2 ? null : this.showWheel(e)}>SPIN</button>
//             </div>
//           }
//           <div>
//             {(this.state.showWheel && (this.state.data.length == this.state.itemsList.length)) ? <Wheel itemsList={this.state.itemsList} colors={this.state.data} /> : null}
//           </div>
//           <button type="button" className="btn btn-danger mt-3" onClick={(e) => this.hideWheel(e)}>Restart</button>
//         </div>
//       </div>
//     )
//   }
// }
