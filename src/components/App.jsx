import React, { Component } from 'react';
import { Container } from './App.styled';
// import FeedbackOptions from './FeedbackOptions';
// import Statistics from './Statistics';
// import Section from './Section';
// import Notification from './Notification';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    contacts: [],
    name: '',
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
            <label>
              <p>Name</p>

              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <button type="submit">Add contact</button>
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
