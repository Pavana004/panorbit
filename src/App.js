import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './container/Home';
import Profile from './container/Profile';
import Posts from './container/Posts';
import Gallery from './container/Gallery';
import ToDo from './container/ToDo';



function App() {
  return (
   
      <Router>

        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/profile/:id" element={<Profile/>} exact/>
          <Route path="/posts" element={<Posts/>} exact/>
          <Route path="/gallery" element={<Gallery/>} exact/>
          <Route path="/todo" element={<ToDo/>} exact/>
        </Routes>

      </Router>

  );
}

export default App;
