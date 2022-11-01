import { useState, useEffect } from 'react';
import { CharacterDataType, getSingleCharacter } from 'src/shared/helpers/api';

export default function useMovieDetail(
  charaterId: number
): UseCharacterDetailHooksType {
  const [characterDetail, setCharacterDetail] = useState<CharacterDataType>({
    id: charaterId,
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    homeworld: '',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: '',
    edited: '',
    url: '',
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const movieData = await getSingleCharacter(charaterId);
      console.log('........ movie data', movieData);
      if (mounted) {
        setCharacterDetail(movieData);
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, [charaterId]);

  return {
    loading,
    characterDetail,
  };
}

export type UseCharacterDetailHooksType = {
  loading: boolean;
  characterDetail: CharacterDataType;
};
