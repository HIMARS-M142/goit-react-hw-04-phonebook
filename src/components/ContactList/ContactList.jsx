import { styled } from 'styled-components';
const ContactsStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const ButtonContact = styled.button`
  margin-left: 50px;
  background-color: antiquewhite;
  border-radius: 5px;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
const ListStyled = styled.li`
  align-items: center;
  display: flex;
`;
export const ContactList = ({ contacts, onButtonDelete }) => {
  return (
    <ContactsStyled>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListStyled key={id}>
            {name}: {number}
            <ButtonContact onClick={() => onButtonDelete(id)}>
              Delete
            </ButtonContact>
          </ListStyled>
        );
      })}
    </ContactsStyled>
  );
};
