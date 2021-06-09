import React from 'react'
import Particles from 'react-particles-js'
import Logo from '../components/Logo/Logo'

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

export default function NotFoundScreen() {
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Logo />
      <div>
        <img
          src="https://i.pinimg.com/originals/6d/a8/78/6da878cf7299317b2bd88c7471111626.gif"
          alt="404"
        />
        <div className="center">
          <p className="center pa4 br4 shadow-2 white f4">
            You are trying to navigate to invalid route.
          </p>
        </div>
      </div>
    </div>
  )
}
