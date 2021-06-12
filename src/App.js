import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Profile from "./components/Profile";
import FacebookLogin from "react-facebook-login";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [profile, setProfile] = useState({});

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event) => {
    setTodoItems([...todoItems, { content: inputValue, isChecked: false }]);
    setInputValue("");
    event.preventDefault();
  };

  const removeItem = (index) => {
    var items = [...todoItems];
    items.splice(index, 1);
    setTodoItems(items);
  };

  const checkItem = (index) => {
    var items = [...todoItems];
    items[index].isChecked = !items[index].isChecked;
    setTodoItems(items);
  };

  useEffect(() => {
    var storedItems = JSON.parse(localStorage.getItem("TodoList"));
    if (storedItems) {
      setTodoItems(storedItems);
    }
    console.log(profile);
    if (localStorage.getItem("token")) {
      setProfile({
        token: localStorage.getItem("token"),
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        picture: localStorage.getItem("picture"),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(todoItems));
  }, [todoItems]);

  useEffect(() => {
    if (profile.token) {
      localStorage.setItem("token", profile.token);
      localStorage.setItem("name", profile.name);
      localStorage.setItem("email", profile.email);
      localStorage.setItem("picture", profile.picture);
    }
  }, [profile]);

  const responseFacebook = (response) => {
    setProfile({
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      token: response.accessToken,
    });
  };

  return (
    <div className="flex items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="absolute top-6 right-8">
        <button
          className="relative top-5 ml-6 bg-transparent text-white opacity-50 font-light hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setTodoItems([])}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
      <div className="container max-w-2xl mx-auto border  border-gray-300 rounded-lg">
        <Header todosCount={todoItems.length} />
        <div className="max-w-2xl h-96 mx-auto bg-white">
          <TodoList
            items={todoItems}
            remove={removeItem}
            check={checkItem}
          ></TodoList>
        </div>
        <div className="max-w-2xl h-24 mx-auto rounded-b bg-gray-100">
          <form onSubmit={handleInputSubmit}>
            <div className="flex items-center mx-auto px-8 pt-6">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="add new todo"
                className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-block ml-2 p-3 text-center text-white  bg-orange-500 rounded-full shadow hover:shadow-lg focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="absolute top-6 left-8">
        {profile ? (
          <div>
            <FacebookLogin
              appId="504276050619986"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
            />
          </div>
        ) : (
          <Profile profile={profile} />
        )}
      </div>
    </div>
  );
};

export default App;
