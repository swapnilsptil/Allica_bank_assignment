import React from 'react';

import { Container, Row } from 'src/shared/styles/base/grid';
import Loader from 'src/shared/components/Loader/Loader';

import useCharacterList from 'src/shared/hooks/useCharacterList';
import CharacterItem from './CharacterItem';

export default function CharacterList() {
  const { loading, characterList } = useCharacterList();

  return (
    <Container>
      <Row>
        {loading ? (
          <Loader />
        ) : (
          characterList.map((movie) => (
            <CharacterItem
              key={movie.id}
              id={movie.id}
              name={movie.name}
              height={movie.height}
              mass={movie.mass}
              hair_color={movie.hair_color}
              skin_color={movie.skin_color}
            />
          ))
        )}
      </Row>
    </Container>
  );
}
