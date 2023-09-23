import { FilterWrap, FilterLabel, FilterInput } from './Filter.styled';
const Filter = ({ changeFilter, value }) => {
  return (
    <FilterWrap>
      <FilterLabel htmlFor="name">Find contact by number</FilterLabel>
      <FilterInput
        onChange={changeFilter}
        name="filter"
        type="filter"
        value={value}
      ></FilterInput>
    </FilterWrap>
  );
};

export default Filter;
