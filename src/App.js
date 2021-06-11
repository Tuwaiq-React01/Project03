import { useState, useEffect } from 'react';
import RequestFrom from './components/RequestFrom';
import ResponseView from './components/ResponseView'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import './App.css';

import { Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';

const App = () => {
  const [responseState, setResponseState] = useState(null)
  const [loadingState, setLoadingState] = useState(false)
  const [messageState, setMessageState] = useState(null)
  const [messageColorState, setMessageColorState] = useState("gray")

  const [tokenState, setTokenState] = useState(null)

  useEffect(() => {
    if (tokenState) {
      localStorage.setItem("token", tokenState)
    }
  })

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setTokenState(localStorage.getItem("token"))
    }
  }, [])

  function logout(){
    localStorage.clear()
  }

  function responseFacebook(response){
    setTokenState(response.accessToken)
  }

  function sendRequest(host, method, headers, body) {
    setLoadingState(true)

    const _h = {}

    headers.forEach(header => {
      if (header.name) {
        _h[header.name] = header.value
      }
    })

    axios({
      url: host,
      method: method,
      headers: _h,
      data: body
    }).then(response => {
      let color
      if (response.status > 99 && response.status < 200) {
        color = "gray"
      } else if (response.status > 199 && response.status < 300) {
        color = "green"
      } else if (response.status > 299 && response.status < 400) {
        color = "orange"
      } else if (response.status > 399 && response.status < 600) {
        color = "red"
      }

      setResponseState(response)
      setMessageState(response.status)
      setMessageColorState(color)
    })
      .catch(err => {
        setMessageState(err.message)
        setMessageColorState("red")
        setResponseState(null)
      }).then(() => {
        setLoadingState(false)
      })
  }
  return (
    <div className="App">
      {tokenState ?
      <Card>
        <Box p={2}>
          <Box pb={2} display="flex" justifyContent="space-between">
            <Box  fontSize="h4.fontSize">HTTP Request</Box>
              <Link onClick={logout} to='/logout'>
                <Button variant="contained" color="secondery" disableElevation>
                  Logout
                </Button>
              </Link>
          </Box>
          <RequestFrom sendRequest={sendRequest} />
          {
            !loadingState && messageState && (
              <Box display="inline-block" p={1} mt={1} borderRadius="5px" bgcolor={messageColorState} color="white">
                {messageState}
              </Box>
            )
          }
          {
            loadingState && (
              <Box pt={2}>
                <CircularProgress color="secondary" />
              </Box>
            )
          }
          <ResponseView response={responseState} />
        </Box>
      </Card>
      : <FacebookLogin
      appId="502679890851700"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook} />}
    </div>
  )
}

export default App
