import { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import Contact from './Contact';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = event => {
    const userId = {
      ...event,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, userId],
    }));
  };

  eee = e => {
    this.state.contacts.map(data =>
      data.name === e ? alert('wwww') : this.state.contacts.name
    );
  };

  makeFilterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const showFilteredContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm formSubmit={this.formSubmit} qqq={this.eee} />

          <h2>Contacts</h2>
          <Filter
            value={this.state.filter}
            onChange={this.makeFilterContacts}
          />
          <Contact
            contacts={showFilteredContact}
            onDelete={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
