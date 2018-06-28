import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import { Header } from 'semantic-ui-react';
// import axios from 'axios';
import AllBooks from './AllBooks';
import NavBar from './NavBar';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <AllBooks />
      </div>
    );
  }
}
  
export default Home;
