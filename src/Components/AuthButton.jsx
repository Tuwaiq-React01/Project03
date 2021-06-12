import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

export default function FBAuthButton(props) {
  const [userData, setUserData] = useState(0);
  return userData === 0 ? (
    <FacebookLogin
      appId="369149717970534"
      autoLoad={true}
      fields="name,email,picture"
      callback={(r) =>
        setUserData({ name: r.name, email: r.email, picture: r.picture.data })
      }
    />
  ) : (
    <div>
      <h1>Welcome {userData.name}</h1>
      <p>
        <strong>Email: </strong>
        {userData.email}
      </p>
      <img src={userData.picture.url} alt="user avatar" />
    </div>
  );
}
