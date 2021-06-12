import React, { Component, useState, useEffect } from 'react'
import logo from './assets/Bee-01.jpg'
import './assets/style.css'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import QuestionBox from './components/QuestionBox'
import Result from './components/Result'
import axios from 'axios'


export default function App(props) {

  const [questionsBank, setQuestionsBank] = useState([])
  const [score, setScore] = useState(0)
  const [response, setResponse] = useState(0)

  const getQuestions = () => {
    axios.get("https://localhost:5001/home")//My API
      .then(responce => {
        setQuestionsBank([...responce.data])
      })
  }
  console.log(questionsBank)
  const computAnswer = (answer, correctAnswer) => {
    if (answer == correctAnswer) {
      setScore(score + 1 )
    }
    setResponse(response < 10 ? response + 1 : 10 )
  }

  useEffect(() => {
    getQuestions()
  }, [])

  const random =  (n = 5) =>
  Promise.resolve(questionsBank.sort(() => 0.5 - Math.random()).slice(0, n))

  const playAgain = () => {
    getQuestions()
    setScore(0)
    setResponse(0)
  }


  var Screen = questionsBank.length > 0 && response < 10 && questionsBank.map(
    ({ question, answers, correct, questionId }) =>
    (
      <QuestionBox question={question} options={answers} key={questionId} selected={answer => computAnswer(answer, correct)} />
    )
  )
  return (

    <div className="container">
      <div className="title"> QuizBee <span>Test Your knowledge</span> <img width="50px" height="50px" src={logo} /></div>
      {Screen}
      {response == 10 ? <Result score={score} playAgain={playAgain} /> : null}
    </div>
  )
}

