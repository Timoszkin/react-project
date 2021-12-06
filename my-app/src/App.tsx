import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import "./App.css";
import Footer from "./components/dumb/Footer/Footer";
import Header from "./components/dumb/Header/Header";
import { SearchHistoryList } from './components/dumb/SearchHistoryList';
import AuthForm from './components/smart/AuthForm/AuthForm';
import ErrorBoundary from './components/smart/ErrorBoundary/ErrorBoundary';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Movie from './pages/Movie/Movie';
import PrivateRoute from './components/smart/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path='/signin' element={<AuthForm isLoginPage={true}/>}/>
          <Route path='/signup' element={<AuthForm isLoginPage={false}/>}/>
          <Route
              path="/history"
              element={
                <PrivateRoute component={<SearchHistoryList results={[{link: 'asdf', query: 'https://image.tmdb.org/t/p/original/70nxSw3mFBsGmtkvcs91PbjerwD.jpg'} ]}/>} redirectPath="/signin" />
              }
            />
          <Route path='/search' element={<Search/>}/>
          <Route path='/movie/:id' element={<Movie/>}/>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
