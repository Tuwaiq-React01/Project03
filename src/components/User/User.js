import React from 'react'

const User = ({ user }) => {
  return (
    <div>
      <div className="f3">
        <span className="f3 white">Hello</span>
        {' ' + user.kV} {' ✌...'}
      </div>
    </div>
  )
}

export default User
