import React from 'react';

import { useState } from 'react';
import { styled } from 'styled-components';
const FormContacts = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputStyled = styled.input`
  height: 30px;
  border-radius: 15px;
  width: 300px;
  padding: 10px;
  outline: none;
  border: 3px solid blanchedalmond;
  font-size: medium;
  margin-bottom: 10px;
`;

const ButtonStyled = styled.button`
  background-color: antiquewhite;
  border-radius: 5px;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 150px;
  height: 40px;
`;

export const ContactForm = ({ createList }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const formObj = {
    name,
    number,
  };
  const onFormSubmit = e => {
    e.preventDefault();
    createList(formObj);
    setName('');
    setNumber('');
  };
  const onInputChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value);
    else setNumber(value);
  };

  return (
    <FormContacts onSubmit={onFormSubmit}>
      <label htmlFor="name">Name</label>
      <InputStyled
        value={name}
        onInput={onInputChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Number</label>
      <InputStyled
        onInput={onInputChange}
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <ButtonStyled type="submit">Add contact</ButtonStyled>
    </FormContacts>
  );
};

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   onFormSubmit = e => {
//     e.preventDefault();
//     this.props.createList(this.state);
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };
//   onInputChange = ({ target: { value, name } }) => {
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <FormContacts onSubmit={this.onFormSubmit}>
//         <label htmlFor="name">Name</label>
//         <InputStyled
//           value={this.state.name}
//           onInput={this.onInputChange}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//         <label htmlFor="number">Number</label>
//         <InputStyled
//           onInput={this.onInputChange}
//           value={this.state.number}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         <ButtonStyled type="submit">Add contact</ButtonStyled>
//       </FormContacts>
//     );
//   }
// }
