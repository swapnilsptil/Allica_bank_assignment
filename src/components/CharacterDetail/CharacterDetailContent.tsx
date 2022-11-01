import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CharacterDetailHeader from './CharacterDetailHeader';
import CharacterDetailDescription from './CharacterDetailDescription';
import CharacterDetailList from './CharacterDetailList';

import { CharDetailType } from 'src/shared/helpers/api';
import { COLOR_WHITE, COLOR_BACKGROUND } from 'src/shared/styles/themes/colors';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${COLOR_BACKGROUND};
  color: ${COLOR_WHITE};
  font-size: 1.6rem;
  padding: 3rem;
  border-radius: 0.5rem;
`;

export default function CharacterDetailContent({
  title,
  birth_year,
  gender,
  description,
  characters,
  planets,
  species,
  starships,
  vehicles,
}: CharDetailType) {
  return (
    <Wrapper>
      <CharacterDetailHeader
        title={title}
        birth_year={birth_year}
        gender={gender}
      />
      <CharacterDetailDescription description={description} />
      <CharacterDetailList label='Starships' list={characters} />
      <CharacterDetailList label='Films' list={planets} />
      <CharacterDetailList label='Species' list={species} />
      <CharacterDetailList label='Starships' list={starships} />
      <CharacterDetailList label='Vehicles' list={vehicles} />
    </Wrapper>
  );
}

CharacterDetailContent.propTypes = {
  title: PropTypes.string,
  birth_year: PropTypes.string,
  gender: PropTypes.string,
  description: PropTypes.string,
  characters: PropTypes.array,
  planets: PropTypes.array,
  species: PropTypes.array,
  starships: PropTypes.array,
  vehicles: PropTypes.array,
};
