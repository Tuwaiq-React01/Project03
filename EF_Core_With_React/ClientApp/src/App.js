import React, { Component } from 'react';
import { Route , Switch} from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import favGames from './components/FavGames';
import UserAccount from './components/UserAccount'
import Games from './components/Games'
import GameDetail from './components/GameDetail'
import SignIn from './components/SignIn'
import PageNotFound from './components/PageNotFound'
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/RGames' component={Games} />
        <Route path='/RGameDetail' component={GameDetail} />
        <Route path='/RfavGames' component={favGames} />
        <Route path='/RSignIn' component={SignIn} />
        <Route path='/RGameDetail:id' component={GameDetail} />
        <Route path='/RUserAccount' component={UserAccount} />
        <Route component={PageNotFound}/>

        </Switch>

      </Layout>
    );
  }
}
