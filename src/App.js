import './App.css';

import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  const pageSize = 18;
  const apiKey = process.env.REACT_APP_NEWS_API;
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key='General' pageSize={pageSize} apiKey={apiKey} category='General'/>}/>
            <Route exact path="/Business" element={<News key='Business' pageSize={pageSize} apiKey={apiKey} category='Business'/>}/>
            <Route exact path="/Entertainment" element={<News key='Entertainment' pageSize={pageSize} apiKey={apiKey} category='Entertainment'/>}/>
            <Route exact path="/Health" element={<News key='Health' pageSize={pageSize} apiKey={apiKey} category='Health'/>}/>
            <Route exact path="/Science" element={<News key='Science' pageSize={pageSize} apiKey={apiKey} category='Science'/>}/>
            <Route exact path="/Sports" element={<News key='Sports' pageSize={pageSize} apiKey={apiKey} category='Sports'/>}/>
            <Route exact path="/Technology" element={<News key='Technology' pageSize={pageSize} apiKey={apiKey} category='Technology'/>}/>
          </Routes>
        </Router>
      </div>
    )
}