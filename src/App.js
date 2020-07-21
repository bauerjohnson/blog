import React, { Component } from 'react';
import classes from './app.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';



import Layout from './components/Layouts/Layout';
import Latest from './components/NavigationITEMS/latest/latest';
import News from './components/NavigationITEMS/news/news';
import Entertainment from './components/NavigationITEMS/entertainment/entertainment';
import Carousel from './components/Carousel/Carousel';

class App extends Component {
  render() {
    return (
      <Router>
      <div className = {classes.app}>
       <Layout>
       <Route path = '/' exact component = {Latest} />
        <Route path =  '/news' exact component = {News} />
        <Route path =  '/entertainment'component = {Entertainment} />  
        <Carousel />    


 </Layout>
        
       
      </div>
      </Router>
    );
  }
}

export default App;
