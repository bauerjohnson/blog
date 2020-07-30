import React, { Component } from 'react';
import classes from './app.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';



import Layout from './components/Layouts/Layout';
import Latest from './components/NavigationITEMS/latest/latest';
import News from './components/NavigationITEMS/news/News';
import Home from './components/NavigationITEMS/Home/Home';
import Carousel from './components/Carousel/Carousel';
import Socialicons from './components/Logo/Background/Socialicon/Socialicon';


class App extends Component {
  render() {
    return (
      <Router>
        <div className = {classes.desktop}>
       <Socialicons />
        </div>
      <div className = {classes.app}>
       <Layout>
       <Route path =  '/' exact component = {Home} />
       <Route path = '/latest/:postId'exact component = {Latest} />
        <Route path =  '/news'  component = {News} />
          
       


 </Layout>
        
       
      </div>
      </Router>
    );
  }
}

export default App;
