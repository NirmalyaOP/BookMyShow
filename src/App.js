import React from 'react';
import axios from 'axios';

import {Route} from 'react-router-dom';
//mport Navbar from './components/Navbar/Navbar.component';

//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from './Pages/HomePage';
import MoviePage from "./Pages/Movie.Page";

import MovieHOC from './HOC/Movie.HOC';
import DefaultHOC from "./HOC/Default.HOC";
import Plays from "./Pages/Plays.Page";

axios.defaults.baseURL='https://api.themoviedb.org/3';
axios.defaults.params={};
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;



function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage}/>
    <MovieHOC path="/movie/:id" exact component={MoviePage} />
    <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;