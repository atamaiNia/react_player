import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: 5px;
  :last-child {
    margin-bottom: 0px;
  }
  :nth-child(even) {
    color: tomato;
  }
`;
