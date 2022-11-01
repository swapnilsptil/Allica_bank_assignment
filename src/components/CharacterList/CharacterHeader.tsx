import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CharacterHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.7rem;
`;

const CharacterTitle = styled.h3`
  font-family: 'Star Jedi', 'Open Sans', sans-serif;
  font-size: 2.2rem;
  letter-spacing: 2px;
`;

export default function CharacterHeader({ id, name }: CharacterHeaderProps) {
  return (
    <CharacterHeaderStyle>
      <CharacterTitle>
        <Link to={`/people/${id}`}>{name}</Link>
      </CharacterTitle>
    </CharacterHeaderStyle>
  );
}

export type CharacterHeaderProps = {
  id: number;
  name: string;
};

CharacterHeader.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
