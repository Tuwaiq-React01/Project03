import React from "react";

const Profile = ({ profile }) => {
  return (
    <div class="card border opacity-50 rounded relative mx-auto shadow-lg">
      <div class="profile flex m-3 ml-4 text-white">
        <div class="title pt-5 mt-2 ml-6 font-bold">
          <div class="name break-words text-white opacity-100">
            {profile.name}
          </div>
          <div class="add font-semibold text-sm italic dark">
            {profile.email}
          </div>
          <button
            className="bg-transparent text-white opacity-75 font-light hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => localStorage.clear()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
