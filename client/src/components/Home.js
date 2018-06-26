import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {

  render() {
    return (
      <Header as='h1' textAlign='center'>Book Doctors</Header>
    );
  }
}

export default Home;
