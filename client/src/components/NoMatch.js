import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>
          You're looking for a page from another book!
          <Link to='/'> Home</Link>
        </Header>
        <p>Please contact our <a href={`mailto:${'pulsipherd@gmail.com'}`}>head pharmasist</a> to let him know that there's a page missing!</p>
      </div>
    );
  }
}

export default NoMatch;
