import React from 'react'
import { GoogleLogin } from 'react-google-login'

const Signin = ({ onRouteChange }) => {
  return (
    <div className="pa4 black-90">
      <h1>Login with Your Favorite Provider</h1>
      <div className="center br3 shadow-2 w-50 pa4">
        <GoogleLogin
          theme="dark"
          className="w-100"
          clientId="725272891211-t5kcibhj8vn26a7rnl26pjen0j82m036.apps.googleusercontent.com"
          buttonText="Login with Google"
          isSignedIn={true}
          onSuccess={(res) => {
            onRouteChange('home', res.At)
          }}
          onFailure={() => {
            console.log('failed')
          }}
        />
      </div>
    </div>
  )
}

export default Signin
