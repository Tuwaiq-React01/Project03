import axios from 'axios';
import Nav1 from './components/Nav'
import Cards from './components/Cards'
import Main from './components/MainPage'
import Loading from './components/Loading'
import SelectedVideo from './components/SelectedVideo'
import FacebookSingin from './components/FacebookSingin'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { Button, Container, Row, Col, DropdownButton, Dropdown, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';







export default function App() {
  const ccc = () =>{
    console.log("ooooooooooooooooooooooooooooooooooooooooooo")
    return 8;
    
  }
  const [videos, setvideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(()=>null);
  const [countryCode, setcountryCode] = useState(()=>"SA");
  const [maxResults, setmaxResults] = useState(()=>20);
  const [username, setusername] = useState(()=>"");





  const [show, setShow] = useState(false);

  const handleClose = () => setShow(true);


  useEffect(() => {
    callApi()
  }, [countryCode, maxResults])
  const callApi = () => {
    axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=" + maxResults + "&chart=mostPopular&regionCode=" + countryCode + "&key=AIzaSyD8_QN8Y_yoJXl-866gRqLbFtZML-njxLk")
      .then((response) => {
        console.log("this response ", response);
        setvideos(response.data.items)
      }
      ).catch((error) => {
        console.log("error", error)
      })
  }

  const getSelectValue = (e) => {
    console.log("get value")
    console.log(e);
    setcountryCode(e)


  }


  const getSelectMaxValue = (e) => {
    console.log("get value")
    console.log(e);
    setmaxResults(e)



  }
  var lode = false;
  console.log("(this.state.videos" + lode)
  if (videos == "") {

    lode = false;
  }
  else {
    lode = true
  }




  const value = lode ? <Cards videos={videos} /> : <Loading />
  console.log(selectedVideo)

  return (

    <div>
      <>
        <Router>
          <Nav1 username={username}/>

          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/Videos">
            <div className="App" style={{ marginTop: "25px", marginBottom: "50px" }}>
              <Container>
                <Row>
                  <Col>
                    <DropdownButton onSelect={getSelectMaxValue} id="dropdown-basic-button" title="Max Results" >
                      <Dropdown.Item eventKey="5" >5</Dropdown.Item>
                      <Dropdown.Item eventKey="10">10</Dropdown.Item>
                      <Dropdown.Item eventKey="15">15</Dropdown.Item>
                      <Dropdown.Item eventKey="20">20</Dropdown.Item>
                      <Dropdown.Item eventKey="25">25</Dropdown.Item>
                      <Dropdown.Item eventKey="30">30</Dropdown.Item>

                    </DropdownButton>
                  </Col>
                  <Col>


                    <DropdownButton onSelect={getSelectValue} id="dropdown-basic-button" title="Select the Country" >
                      <Dropdown.Item eventKey="SA" >Saudi Arabia</Dropdown.Item>
                      <Dropdown.Item eventKey="US">United States</Dropdown.Item>
                      <Dropdown.Item eventKey="IT">Italy</Dropdown.Item>
                      <Dropdown.Item eventKey="JP">Japan</Dropdown.Item>

                    </DropdownButton>
                  </Col>
                </Row>
              </Container>



            </div>
            {value}
          </Route>

          <Route exact path="/SignInFacebook">
                 
          <FacebookSingin setusername={setusername}  username={username}/>
            
          </Route>

          <Route exact path="/Video/:id/:title/:viewCount/:likeCount/:dislikeCount">
            
            <SelectedVideo videos={videos} />
          </Route>
          

         
        </Router>
      </>
    </div>
  )
}
