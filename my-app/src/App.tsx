import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import "./App.css";
import Footer from "./components/dumb/Footer/Footer";
import Header from "./components/dumb/Header/Header";
import { MovieInfo } from './components/dumb/MovieInfo';
import { MovieList } from './components/dumb/MovieList';
import { SearchHistoryList } from './components/dumb/SearchHistoryList';
import AuthForm from './components/smart/AuthForm/AuthForm';
import ErrorBoundary from './components/smart/ErrorBoundary/ErrorBoundary';

function App() {
  // two variables to test MovieList and MovieInfo components
  let list = {
    results:
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
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path='/signin' element={<AuthForm isLoginPage={true}/>}/>
          <Route path='/signup' element={<AuthForm isLoginPage={false}/>}/>
          <Route path='/history' element={<SearchHistoryList results={[{link: 'asdf', query: 'https://image.tmdb.org/t/p/original/70nxSw3mFBsGmtkvcs91PbjerwD.jpg'} ]}/>} />
        </Routes>

        <MovieList {...list}/>
        <MovieInfo {...someMovie}/>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
