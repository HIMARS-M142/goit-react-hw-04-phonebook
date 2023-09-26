import { styled } from 'styled-components';
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 0;
`;
const InputFilter = styled.input`
  height: 30px;
  border-radius: 15px;
  width: 300px;
  padding: 10px;
  outline: none;
  border: 3px solid blanchedalmond;
  font-size: medium;
`;
export const Filter = ({ filterValue, filter }) => {
  return (
    <FilterContainer>
      <label htmlFor="filter">Find contacts by name</label>
      <InputFilter
        onChange={filter}
        type="text"
        name="filter"
        value={filterValue}
      />
    </FilterContainer>
  );
};
