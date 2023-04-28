import React, { Component } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';
// import FeedbackOptions from './FeedbackOptions';
// import Statistics from './Statistics';
// import Section from './Section';
// import Notification from './Notification';
// import PropTypes from 'prop-types';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addListName = ({ name, number }) => {
    console.log(name);
    const item = {
      id: nanoid(5),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [item, ...prevState.contacts],
    }));

    console.log(this.state.contacts);
  };
  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  getVisibleItems = () => {
    return this.state.contacts.filter(el =>
      el.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  render() {
    return (
      <>
        <Container>
          <h2>Phonebook</h2>

          <ContactForm onSubmit={this.addListName} />
        </Container>

        <Container>
          <h2>Contacts</h2>

          <Filter onChange={this.onInputChange} value={this.state.filter} />

          <ul
            style={{
              listStyle: 'disc',
              paddingLeft: '15px',
            }}
          >
            {this.getVisibleItems().map(({ id, name, number }) => {
              return (
                <li
                  key={id}
                  style={{
                    margin: '10px',
                  }}
                >
                  <span>{name}</span> <span>{number}</span>
                </li>
              );
            })}
          </ul>

          {/* <ContactList /> */}
        </Container>
      </>
    );
  }
}

export default App;
