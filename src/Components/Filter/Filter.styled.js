import styled from '@emotion/styled';
export const FilterWrap = styled.div`
  display: flex;
`;
export const FilterLabel = styled.label`
  display: flex;
`;
export const FilterInput = styled.input`
  display: block;
  padding-left: 10px;
  width: 100%;
  height: 30px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  &:hover,
  &:focus {
    border-color: green;
  }
`;
