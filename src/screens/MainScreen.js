import React, { useState, useEffect } from 'react'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
import Navigation from '../components/Navigation/Navigation'
import Signin from '../components/Signin/Signin'
import Logo from '../components/Logo/Logo'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import User from '../components/User/User'

const app = new Clarifai.App({
  apiKey: 'dd1d4e5ab9624b15bd989bbce751e757',
})

const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
}

export default function MainScreen() {
  const [input, setInput] = useState(() => '')
  const [imageUrl, setImageUrl] = useState(() => '')
  const [box, setBox] = useState(() => [])
  const [route, setRoute] = useState(() => 'signin')
  const [isSignedIn, setIsSignedIn] = useState(() => false)
  const [user, setUser] = useState(() => {})

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    }
  }

  const displayFaceBox = (box) => {
    setBox(box)
  }

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const onButtonSubmit = () => {
    setImageUrl(input)
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => displayFaceBox(calculateFaceLocation(response)))
      .catch((err) => console.log(err))
  }

  const onRouteChange = (route, user) => {
    setUser(user)
    if (route === 'signout') {
      setIsSignedIn(false)
    } else if (route === 'home') {
      setIsSignedIn(true)
    }
    setRoute(route)
  }

  useEffect(() => {
    console.log('I have mounted...')
  })

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation
        user={user}
        isSignedIn={isSignedIn}
        onRouteChange={onRouteChange}
      />
      {route === 'home' ? (
        <div>
          <Logo />
          <User user={user} />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
      ) : (
        <Signin onRouteChange={onRouteChange} />
      )}
    </div>
  )
}
