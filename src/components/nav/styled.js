import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from 'styles/index';

// svg
import { ReactComponent as RocketSVG } from './rocket.svg';

export const StyledNav = styled.nav`
  height: 70px;
  border-bottom: 4px ${colors.coral} solid;
  background-color: ${colors.storm};
  padding: 0 1rem;
  display: flex;
  align-items: center;
  color: ${colors.white};
  font-size: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledIcon = styled(RocketSVG)`
  fill: ${colors.white};
  margin-right: 1rem;
`;
