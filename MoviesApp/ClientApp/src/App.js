import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Top from './pages/Top';
import Reviews from './pages/Reviews';

import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/top-movies' component={Top}/>
        <Route path='/Reviews/:id' component={Reviews} />
      </Layout>
    );
  }
}
