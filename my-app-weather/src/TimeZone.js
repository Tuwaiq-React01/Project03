import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import  { useEffect, useState } from 'react'
export default function TimeZone() {
  const[data,setdata]= useState({})
  const[data2,setdata2]= useState({})
  const[data3,setdata3]= useState({})
  const[data4,setdata4]= useState({})
  const[data5,setdata5]= useState({})
  const[data6,setdata6]= useState({})
  
  useEffect(() => {
    callApi1()
    callApi_2()
    callApi_3()
    callApi_4()
    callApi_5()
    callApi_6()
  }, [])

  const callApi1= () =>{
  axios({
    method : "get",                                           
    url:"http://api.timezonedb.com/v2.1/get-time-zone?key=GS3OQ86QHA33&format=json&by=position&lat=24.774265&lng=46.738586"})
  .then((info)=>{setdata( info.data)})// console.log("Response !!!!! ", this.state.data)})
  .catch((error)=>{console.log("error",error)})}
  const callApi_2= () =>{
    axios({
      method : "get",                                            
      url:"http://api.timezonedb.com/v2.1/get-time-zone?key=GS3OQ86QHA33&format=json&by=position&lat=51.509865&lng=-0.118092"})
    .then((info)=>{
   setdata2(info.data)}).catch((error)=>{console.log("error",error)})}
   const callApi_3= () =>{
    axios({
      method : "get",                                            
      url:"http://api.timezonedb.com/v2.1/get-time-zone?key=GS3OQ86QHA33&format=json&by=position&lat=38.889248&lng=-77.050636"})
    .then((info)=>{
   setdata3(info.data)}).catch((error)=>{console.log("error",error)})}
   const callApi_4= () =>{
      axios({
        method : "get",                                            
        url:"http://api.timezonedb.com/v2.1/get-time-zone?key=GS3OQ86QHA33&format=json&by=position&lat=35.652832&lng=139.839478"
      })
      .then((info)=>{
     setdata4( info.data)}).catch((error)=>{console.log("error",error)})}
     const callApi_5= () =>{
        axios({
          method : "get",                                            
          url:"http://api.timezonedb.com/v2.1/get-time-zone?key=GS3OQ86QHA33&format=json&by=position&lat=25.276987&lng=55.296249"
        })
        .then((info)=>{
       setdata5( info.data)}).catch((error)=>{console.log("error",error)})}
       const callApi_6= () =>{
          axios({
            method : "get",                                            
            url:"http://api.timezonedb.com/v2.1/get-time-zone?key=GS3OQ86QHA33&format=json&by=position&lat=51.509865&lng=-0.118092"
          })
          .then((info)=>{
         setdata6(info.data)}).catch((error)=>{console.log("error",error)})}
  
  return (
    <div>
       <center>
                  <h2 className="text">Time zone </h2><br></br> 
                  <Container>
                    <center>
                  <Row md={4}>
                  <Col className="co">
               <Card border="info" style={{ width: '18rem' }}>
      <Card.Header>Time Zone of {data.zoneName}</Card.Header>
      <Card.Body>
      <Card.Title>{data.countryName},{data.countryCode}</Card.Title>
      <Card.Text>
      {data.formatted}
      </Card.Text>
      </Card.Body>
      </Card>
     </Col>
     <Col className="co">
      <Card border="info" style={{ width: '18rem' }}>
      <Card.Header>Time Zone of {data2.zoneName}</Card.Header>
      <Card.Body>
      <Card.Title>{data2.countryName},{data2.countryCode}</Card.Title>
      <Card.Text>
      {data2.formatted}
      </Card.Text>
      </Card.Body>
      </Card>
      </Col><br></br>
      <Col className="co">
      <Card border="info" style={{ width: '18rem' }}>
      <Card.Header>Time Zone of {data3.zoneName}</Card.Header>
      <Card.Body>
      <Card.Title>{data3.countryName},{data3.countryCode}</Card.Title>
      <Card.Text>
      {data3.formatted}
      </Card.Text>
      </Card.Body>
      </Card>
      </Col>
     </Row>
     <Row md={4}>
                  <Col className="co">
               <Card border="info" style={{ width: '18rem' }}>
      <Card.Header>Time Zone of {data4.zoneName}</Card.Header>
      <Card.Body>
      <Card.Title>{data4.countryName},{data4.countryCode}</Card.Title>
      <Card.Text>
      {data4.formatted}
      </Card.Text>
      </Card.Body>
      </Card>
     </Col>
     <Col className="co">
      <Card border="info" style={{ width: '18rem' }}>
      <Card.Header>Time Zone of {data5.zoneName}</Card.Header>
      <Card.Body>
      <Card.Title>{data5.countryName},{data5.countryCode}</Card.Title>
      <Card.Text>
      {data5.formatted}
      </Card.Text>
      </Card.Body>
      </Card>
      </Col><br></br>
      <Col className="co">
      <Card border="info" style={{ width: '18rem' }}>
      <Card.Header>Time Zone of {data6.zoneName}</Card.Header>
      <Card.Body>
      <Card.Title>{data6.countryName},{data6.countryCode}</Card.Title>
      <Card.Text>
      {data6.formatted}
      </Card.Text>
      </Card.Body>
      </Card>
      </Col>
     </Row>
     </center>
      </Container>
        <br />
        </center>
    </div>
  )
}
