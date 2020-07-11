import React, { Component } from 'react';
import classes from './app.css';


import Layout from './components/Layouts/Layout';

class App extends Component {
  render() {
    return (
      <div className = {classes.app}>
       
        <Layout/>
       
      </div>
    );
  }
}

export default App;
