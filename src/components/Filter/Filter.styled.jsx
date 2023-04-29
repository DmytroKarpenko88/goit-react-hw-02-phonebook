import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  margin: 10px 0;
`;

export const Input = styled.input`
  width: 200px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 1px;

  &:focus-within {
    border: 1px solid #2b2bf6;
    filter: drop-shadow(0px 4px 4px #2b2bf6);
    outline: none;
  }
`;
