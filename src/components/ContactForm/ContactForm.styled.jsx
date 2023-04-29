import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
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

export const Button = styled.button`
  width: 150px;
  padding: 4px 12px;
  background-color: #ffffff;
  border: 1px solid #959595;

  border-radius: 4px;

  &&:active {
    background-color: #2b2bf6;
    color: #ffffff;
  }
`;
