import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import './custom.css'

export default function App(props) {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/Profile' component={Profile} />
      <Route path='/About' component={About} />
    </Layout>

  );

}
