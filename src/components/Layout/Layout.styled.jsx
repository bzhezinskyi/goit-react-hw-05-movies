import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  padding-left: 20px;
  color: black;

  &.active {
    color: orange;
  }
`;
