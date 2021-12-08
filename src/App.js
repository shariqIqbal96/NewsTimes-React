import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 18;
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key='General' pageSize={this.pageSize} apiKey={this.apiKey} category='General'/>}/>
            <Route exact path="/Business" element={<News key='Business' pageSize={this.pageSize} apiKey={this.apiKey} category='Business'/>}/>
            <Route exact path="/Entertainment" element={<News key='Entertainment' pageSize={this.pageSize} apiKey={this.apiKey} category='Entertainment'/>}/>
            <Route exact path="/Health" element={<News key='Health' pageSize={this.pageSize} apiKey={this.apiKey} category='Health'/>}/>
            <Route exact path="/Science" element={<News key='Science' pageSize={this.pageSize} apiKey={this.apiKey} category='Science'/>}/>
            <Route exact path="/Sports" element={<News key='Sports' pageSize={this.pageSize} apiKey={this.apiKey} category='Sports'/>}/>
            <Route exact path="/Technology" element={<News key='Technology' pageSize={this.pageSize} apiKey={this.apiKey} category='Technology'/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}