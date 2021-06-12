import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import '../App.css'
import App from '../App';

export default class Auth extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      picture:"",
      token:""
    }
  }
   responseFacebook = (response) => {
    this.setState({name:response.name})
    this.setState({email:response.email})
    this.setState({picture:response.picture.data.url})
    this.setState({token:response.accessToken})
  }
  // get the values
  componentDidMount=()=>{
    if(localStorage.getItem("token")){
      this.setState({token:localStorage.getItem("token")})
      this.setState({name:localStorage.getItem("name")})
      this.setState({email:localStorage.getItem("email")})
      this.setState({picture:localStorage.getItem("picture")})
    }
  }
  // set
  componentDidUpdate=() =>{
    if(this.state.token){
    localStorage.setItem("token",this.state.token)
    localStorage.setItem("name",this.state.name)
    localStorage.setItem("email",this.state.email)
    localStorage.setItem("picture",this.state.picture)
    }
  }
  render() {
    return (
      <center>
         {this.state.token? <App />:<FacebookLogin
            appId="154369599946703"
            autoLoad={true}
            fields="name,email,picture"
            callback={this.responseFacebook} />}
      </center>
    )
  }
}