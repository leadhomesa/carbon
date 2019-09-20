import { styled } from 'linaria/react';
import { Link } from 'react-router-dom';
import { colors } from 'styles/index';

export const StyledLink = styled(Link)`
  display: block;
  margin-bottom: 10px;
  color: ${colors.coral};
`;
