import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Footer from "./components/Footer";
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


/**
* @author aakash Pandey
* @class App
**/

export default class App extends Component {
 pageSize = 10
 apiKey = process.env.REACT_APP_NEWS_API
// apiKey = "5abd17a1f07f443e9854b6dda904c254"
 render() {
  return(
      <Router>
        <>
          <Navbar/>
          <Routes>
            <Route exact path = "/" element = {<News key="general" pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "general"/>}/>
            <Route exact path = "/business" element = {<News key="business" pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "business"/>}/>
            <Route exact path = "/entertainment" element = {<News key="entertainment" pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "entertainment"/>}/>
            <Route exact path = "/health" element = {<News key="health" pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "health"/>}/>
            <Route exact path = "/science" element = {<News key="science" pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "science"/>}/>
            <Route exact path = "/sports" element = {<News key="sports" pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "sports"/>}/>
            <Route exact path = "/technology" element = {<News key="technology" pageSize = {this.pageSize} apiKey = {this.apiKey} country = "in" category = "technology"/>}/>
          </Routes>
          {/* <Footer/> */}
        </>
      </Router>

    /* // <div>
      //   <Navbar/>
      //   <News pageSize = {this.pageSize} country = "in" category = "sports"/>
      //   <Footer/>
      // </div> */
    )
   }
 }

