import React from 'react';
import { useParams } from 'react-router-dom';

import CharacterDetailContent from './CharacterDetailContent';

import { Container } from 'src/shared/styles/base/grid';
import Loader from 'src/shared/components/Loader/Loader';

import useCharacterDetail from 'src/shared/hooks/useCharacterDetail';

export default function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const { loading, characterDetail } = useCharacterDetail(Number(id));
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <CharacterDetailContent
          title={characterDetail.name}
          birth_year={characterDetail.birth_year}
          gender={characterDetail.gender}
          description={`${characterDetail.hair_color} - ${characterDetail.skin_color}`}
          characters={characterDetail.starships}
          planets={characterDetail.films}
          species={characterDetail.species}
          starships={characterDetail.starships}
          vehicles={characterDetail.vehicles}
        />
      )}
    </Container>
  );
}
