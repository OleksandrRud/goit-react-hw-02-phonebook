import { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmit = event => {
    const userId = {
      ...event,
      id: nanoid(),
    };
    // this.setState({ ...this.state, ...event });
    console.log(userId);
  };

  render() {
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
          <ContactForm formSubmit={this.formSubmit} />

          <h2>Contacts</h2>
          {/* <Filter />
          <Contact List /> */}
        </div>
      </div>
    );
  }
}
