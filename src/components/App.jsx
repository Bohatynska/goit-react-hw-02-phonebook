import { nanoid } from 'nanoid';
import { Container } from 'Components/App.styled';
import React, { Component } from 'react';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import ContactList from './ContactList/ContactList.jsx';
import Filter from './Filter/Filter';
// import Filter from './Filter/Filter.jsx';
export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contacts => {
    console.log(contacts);
    const { name, number } = contacts;
    const contact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  changeFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter defaultValue={filter} onChange={this.changeFilter} />
        <ContactList contacts={contacts}></ContactList>
      </Container>
    );
  }
}
