
import React from 'react';
import './App.css';
import "./App.css";
import Footer from "./components/dumb/Footer/Footer";
import Header from "./components/dumb/Header/Header";
import { MovieInfo } from './components/dumb/MovieInfo';
import { MovieList } from './components/dumb/MovieList';
import {
  Route,
  Routes
} from "react-router-dom";
import AuthForm from './components/smart/SmartComponent/AuthForm/AuthForm';
import { SearchHistoryList } from './components/dumb/SearchHistoryList';

function App() {
  // two variables to test MovieList and MovieInfo components
  let list = {
    results :
    [
      {
      link: 'asdf',
      poster_path: 'https://image.tmdb.org/t/p/original/70nxSw3mFBsGmtkvcs91PbjerwD.jpg',
    },
      {
      link: 'asdf',
      poster_path: 'https://image.tmdb.org/t/p/original/70nxSw3mFBsGmtkvcs91PbjerwD.jpg',
    },
      {
      link: 'asdf',
      poster_path: 'https://image.tmdb.org/t/p/original/70nxSw3mFBsGmtkvcs91PbjerwD.jpg',
    },
      {
      link: 'asdf',
      poster_path: 'https://image.tmdb.org/t/p/original/70nxSw3mFBsGmtkvcs91PbjerwD.jpg',
    },
      {
      link: 'asdf',
      poster_path: 'https://image.tmdb.org/t/p/original/70nxSw3mFBsGmtkvcs91PbjerwD.jpg',
    },
      {
      link: 'asdf',
      poster_path: 'https://image.tmdb.org/t/p/original/70nxSw3mFBsGmtkvcs91PbjerwD.jpg',
    },
      {
      link: 'asdf',
      poster_path: 'https://image.tmdb.org/t/p/original/70nxSw3mFBsGmtkvcs91PbjerwD.jpg',
    },
  ],
  }

  let someMovie = {
    name: 'Some Lame Movie Name',
    posterPath: 'https://image.tmdb.org/t/p/original/70nxSw3mFBsGmtkvcs91PbjerwD.jpg',
    plot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, voluptatum fugit temporibus et corrupti consectetur eius non excepturi, qui suscipit dolorem delectus voluptatem sint minus omnis commodi repellendus ducimus nulla',
    rating: 5.6,
    director: 'Groger likas',
    year: 2012,
  }
  return (
    <div className="App">
      <Header email="test@gmail.com" />
      <Routes>
        <Route path='/signin' element={<AuthForm isSigninPage={true}/>}/>
        <Route path='/signup' element={<AuthForm isSigninPage={false}/>}/>
        <Route path='/history' element={<SearchHistoryList results={[{link: 'asdf', query: 'https://image.tmdb.org/t/p/original/70nxSw3mFBsGmtkvcs91PbjerwD.jpg'} ]}/>} />
      </Routes>

      <MovieList {...list}/>
      <MovieInfo {...someMovie}/>
      <Footer />
    </div>
  );
}

export default App;
