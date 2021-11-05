import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const LinkStyled = styled(NavLink)`
  margin-right: 30px;
  text-decoration: none;
  font-weight: 500;
  color: rgb(75, 75, 75);
  font-size: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
