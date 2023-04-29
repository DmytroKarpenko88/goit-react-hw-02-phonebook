import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 15px 0;
  list-style: disc;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const Text = styled.span``;

export const Button = styled.button`
  margin-left: auto;
  width: 100px;
  padding: 4px 12px;
  background-color: #ffffff;
  border: 1px solid #959595;

  border-radius: 4px;

  &&:active {
    background-color: #2b2bf6;
    color: #ffffff;
  }
`;
