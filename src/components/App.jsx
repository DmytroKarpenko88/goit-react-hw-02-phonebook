import React, { Component } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';
// import FeedbackOptions from './FeedbackOptions';
// import Statistics from './Statistics';
// import Section from './Section';
// import Notification from './Notification';
// import PropTypes from 'prop-types';

import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addListName = name => {
    console.log(name);
    const item = {
      id: nanoid(5),
      name,
    };

    this.setState(prevState => ({
      contacts: [item, ...prevState.contacts],
    }));

    console.log(this.state.contacts);
  };

  render() {
    return (
      <>
        <Container>
          <h2>Phonebook</h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: ' 15px',
            }}
          >
            <Form onSubmit={this.addListName} />
          </div>
        </Container>

        <Container>
          <div>
            <h2>Contacts</h2>
            <ul>
              <li>Bob</li>
              <li>Marvin</li>
              <li>Bart</li>
            </ul>
          </div>
        </Container>
      </>
    );
  }
}

export default App;
