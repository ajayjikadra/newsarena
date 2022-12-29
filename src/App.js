import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter, Routes, Route } from "react-router-dom";



export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY

  setProgress = (progress) =>{
    this.setState({progress : progress})

  }
  constructor(props) {
    super(props);
    this.state = {mode: true};
    this.handleClick = this.handleClick.bind(this);
  }
  divStyle ={
    background: "#121212",
    color: "white"
  }
  handleClick() {
    this.setState({
      mode : !this.state.mode,
    })
  }
  render() {
    console.log(this.apiKey);
    return (
      <div style={this.state.mode?this.divStyle:{}}>
      <BrowserRouter>
      <LoadingBar
        height={2}
        color='#f11946'
        progress={this.state.progress}
        
      />
       <Navbar mode={this.state.mode} handleClick={this.handleClick}/>
       
      <Routes>
        <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} title= "Top Headlines-NewsArena" mode={this.state.mode} key="general" pageSize={6} country = "in" category = "general"/>}/>
        <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} title='Top Headlines-Business' mode={this.state.mode} key="business" pageSize={6} country = "in" category = "business"/>}/>
        <Route path="/entertainment" element={<News setProgress={this.setProgress}apiKey={this.apiKey}  title='Top Headlines-Entertainment' mode={this.state.mode} key="entertainment" pageSize={6} country = "in" category = "entertainment"/>}/>
        {/* <Route path="/general" element={<News setProgress={this.setProgress}  title='Top Headlines-General'  mode={this.state.mode} key="general" pageSize={6} country = "in" category = "general"/>}/> */}
        <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} title='Top Headlines-Health' mode={this.state.mode} key="health" pageSize={6} country = "in" category = "health"/>}/>
        <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  title='Top Headlines-Science' mode={this.state.mode} key="science" pageSize={6} country = "in" category = "science"/>}/>
        <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  title='Top Headlines-Sports' mode={this.state.mode} key="sports" pageSize={6} country = "in" category = "sports"/>}/>
        <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  title='Top Headlines-Technology'mode={this.state.mode} key="technology" pageSize={6} country = "in" category = "technology"/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}
