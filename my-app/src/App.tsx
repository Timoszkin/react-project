import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import "./App.css";
import Footer from "./components/dumb/Footer/Footer";
import Header from "./components/dumb/Header/Header";
import AuthForm from './components/smart/AuthForm/AuthForm';
import ErrorBoundary from './components/smart/ErrorBoundary/ErrorBoundary';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Movie from './pages/Movie/Movie';
import History from './pages/History/History';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path='/signin' element={<AuthForm isLoginPage={true}/>}/>
          <Route path='/signup' element={<AuthForm isLoginPage={false}/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/movie/:id' element={<Movie/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
