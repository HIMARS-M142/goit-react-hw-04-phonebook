import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { styled } from 'styled-components';
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const data = localStorage.getItem('contacts');
    if (data) {
      this.setState({ contacts: JSON.parse(data) });
    } else {
      console.log('dasd');
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  createList = ({ name, number }) => {
    const isRepeat = this.state.contacts.find(el => el.name === name);
    if (isRepeat) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(prev => ({
      contacts: [
        {
          name,
          number,
          id: nanoid(),
        },
        ...prev.contacts,
      ],
    }));
  };
  onButtonDelete = key => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(({ id }) => id !== key),
    }));
  };

  filterList = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  onInputValue = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 25,
          color: '#010101',
        }}
      >
        <AppContainer>
          <h1>Phonebook</h1>
          <ContactForm createList={this.createList} />
          <h2>Contacts</h2>
          <Filter filter={this.onInputValue} filterValue={this.state.filter} />
          <ContactList
            contacts={this.filterList()}
            onButtonDelete={this.onButtonDelete}
          />
        </AppContainer>
      </div>
    );
  }
}
