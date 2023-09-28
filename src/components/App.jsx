import React, { useEffect, useMemo, useState } from 'react';

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

export const App = () => {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localData = localStorage.getItem('contacts');
    localData && JSON.parse(localData).length
      ? setContacts(JSON.parse(localData))
      : setContacts(defaultContacts);
  }, []);

  useEffect(() => {
    contacts && localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const createList = ({ name, number }) => {
    const isRepeat = contacts.find(el => el.name === name);
    if (isRepeat) {
      return alert(`${name} is already in contacts`);
    }

    setContacts(prev => {
      return [
        {
          name,
          number,
          id: nanoid(),
        },
        ...prev,
      ];
    });
  };
  const onButtonDelete = key => {
    setContacts(prev => {
      return prev.filter(({ id }) => id !== key);
    });
  };

  const filteredList = useMemo(() => {
    return (
      contacts &&
      contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter]);

  const onInputValue = ({ target: { value } }) => {
    setFilter(value);
  };

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
        <ContactForm createList={createList} />
        <h2>Contacts</h2>
        <Filter filter={onInputValue} filterValue={filter} />
        <ContactList contacts={filteredList} onButtonDelete={onButtonDelete} />
      </AppContainer>
    </div>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [
//
//     ],
//     filter: '',
//   };
//   componentDidMount() {
//     const data = localStorage.getItem('contacts');
//     if (data) {
//       setState({ contacts: JSON.parse(data) });
//     } else {
//       console.log('dasd');
//     }
//   }
//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts.length !== contacts.length) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
//   createList = ({ name, number }) => {
//     const isRepeat = this.state.contacts.find(el => el.name === name);
//     if (isRepeat) {
//       return alert(`${name} is already in contacts`);
//     }
//     this.setState(prev => ({
//       contacts: [
//         {
//           name,
//           number,
//           id: nanoid(),
//         },
//         ...prev.contacts,
//       ],
//     }));
//   };
//   onButtonDelete = key => {
//     this.setState(prev => ({
//       contacts: prev.contacts.filter(({ id }) => id !== key),
//     }));
//   };

//   filterList = () => {
//     return this.state.contacts.filter(({ name }) =>
//       name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//   };
//   onInputValue = ({ target: { value, name } }) => {
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 25,
//           color: '#010101',
//         }}
//       >
//         <AppContainer>
//           <h1>Phonebook</h1>
//           <ContactForm createList={this.createList} />
//           <h2>Contacts</h2>
//           <Filter filter={this.onInputValue} filterValue={this.state.filter} />
//           <ContactList
//             contacts={this.filterList()}
//             onButtonDelete={this.onButtonDelete}
//           />
//         </AppContainer>
//       </div>
//     );
//   }
// }
