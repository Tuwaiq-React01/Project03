import React from 'react'

const Navigation = ({ onRouteChange, isSignedIn, user }) => {
  if (isSignedIn) {
    return (
      <nav
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <p className="f4 link dim black pa3 pointer">{user.ku}</p>

        <img
          src={`https://robohash.org/${user.kv}`}
          width="50"
          height="50"
          className="pt3"
          alt="user"
        />
      </nav>
    )
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signin')}
          className="f3 link dim black underline pa3 pointer"
        >
          Please Login
        </p>
      </nav>
    )
  }
}

export default Navigation
