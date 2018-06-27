import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {

  state = { books: [] }

  componentDidMount() {
    fetch('api/books',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application.json'
      },
      body: JSON.stringify(book)
  }).then(res => res.json() )
    .then(book => {
      const { books } = this.state;
      this.setState({ books: [...books, book] });
    })
}

  render() {
    return (
      <Header as='h1' textAlign='center'>Book Doctors</Header>
    );
  }
}

export default Home;
