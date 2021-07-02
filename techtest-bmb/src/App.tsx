import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { MovieDetails } from './components/MovieDetails';
import MoviesList from './components/MoviesList';
import NotFound from './components/NotFound';
import { TvShowDetail } from './components/TvShowDetail';
import TvShowsList from './components/TvShowsList';

function App() {
  return (
    <BrowserRouter>
      <main className="main-container">
        <Header/>
        <Switch>
          <Route path="/" exact component={MoviesList} />
          <Route path="/details/:movieId" component={MovieDetails} />
          <Route path="/tvshows" component={TvShowsList} />
          <Route path="/tvshow/details/:tvShowId" component={TvShowDetail} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
