import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { COLOR_YELLOW, COLOR_RED } from 'src/shared/styles/themes/colors';

const CharacterLinkStyle = styled.p`
  padding-top: 1.2rem;
  font-size: 1.4rem;
  text-transform: capitalize;
  border-top: 2px solid ${COLOR_RED};
  color: ${COLOR_YELLOW};
`;

export default function CharacterLink({ id }: CharacterLinkProps) {
  return (
    <CharacterLinkStyle>
      <Link to={`/people/${id}`}>More info</Link>
    </CharacterLinkStyle>
  );
}

export type CharacterLinkProps = {
  id: number;
};

CharacterLink.propTypes = {
  id: PropTypes.number.isRequired,
};
