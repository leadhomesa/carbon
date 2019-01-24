import styled from 'styled-components'
import Link from 'react-router-dom/Link';
import { colors, pxtorem } from 'styles';

export const StyledLink = styled(Link)`
  display: block;
  margin-bottom: ${pxtorem(10)};
  color: ${colors.coral};
  :visited {
    color: ${colors.coral};
  }
`;
