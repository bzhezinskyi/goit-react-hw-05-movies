import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  padding: 5px;
  color: black;

  &.active {
    color: orange;
  }
`;
