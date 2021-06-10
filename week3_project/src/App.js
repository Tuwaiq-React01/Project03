import React from 'react'
import Facebooklogin from './Facebooklogin'
import Page from './Page'

export default function App() {
  return (
    <center>
      {localStorage.getItem("token") ? <Page /> : <Facebooklogin/>}
    </center>
  )
}
