import React, { useState, useEffect } from 'react'
import Note from './Note'
import axios from 'axios'
import { Row } from 'reactstrap'
import FacebookLogin from 'react-facebook-login';

export default function Home(props) {

  const getNotes = () => {
    axios({
      method: "GET",
      url: "Notes"
    }).then(function (respons) {
      setNotes(respons.data)
      console.log(notes);
    }).catch(function (error) {
      return error
    })
  }

  const getNote = (id) => {
    axios({
      method: "GET",
      url: `Notes/${id}`
    }).then(function (respons) {
      console.log(respons.data)
    }).catch(function (error) {
      return (error)
    })
  }

  const addNote = (note) => {
    axios({
      method: "POST",
      url: "Notes",
      data: note
    }).then(function (respons) {
      return (respons.data)
    }).catch(function (error) {
      return (error)
    })
  }

  const editNote = (note) => {
    axios({
      method: "PUT",
      url: "Notes",
      data: note
    }).then(function (respons) {
      return (respons.data)
    }).catch(function (error) {
      return (error)
    })
  }

  const deleteNotes = (id) => {
    axios({
      method: "DELETE",
      url: `Notes/${id}`
    }).then(function (respons) {
      return respons.data
    }).catch(function (error) {
      return error
    })
  }

  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState([])
  const facebookResponse = (res) => {
    setToken(res.accessToken);
    setName(res.name);
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
      setName(localStorage.getItem('name'));
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('name', name);
    }
  });
  useEffect(() => {
    getNotes();
  }, [])

  const curr_notes = notes.map((note) =>
    <Note
      key={note.id}
      id={note.id}
      title={note.title}
      content={note.text}
      onEdite={editNote}
      onDelete={deleteNotes}
       />
  )
  return (
    <div>
      <div className='App'>
        <div className={`container-fluid mt-4 text-center`}>
          {!token ? (
            <FacebookLogin
              appId='369149717970534'
              autoLoad={false}
              fields='name,email,picture'
              callback={facebookResponse}
            />
          ) :
            <Row>
              {curr_notes}
            </Row>
          }
        </div>
      </div>
    </div>

  )

}
