import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import AnimeGallery from './pages/AnimeGallery';
import AnimeQuotes from './pages/AnimeQuotes';
import FavAnime from './pages/FavAnime';
import UserInfo from './pages/UserInfo'
import Home from './pages/Home'
import './custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(props) {
  return (
    <div>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/AnimeGallery' component={AnimeGallery} />
        <Route path='/AnimeQuotes' component={AnimeQuotes} />
        <Route path='/FavAnime' component={FavAnime} />
        <Route path='/UserInfo' component={UserInfo} />
      </Layout>
    </div>
  )
}
