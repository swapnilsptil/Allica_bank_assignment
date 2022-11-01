import { useState, useEffect } from 'react';

import { getAllCharacter, CharacterDataType } from 'src/shared/helpers/api';

export default function useCharacterList(): CharacterListHooksType {
  const [characterList, setCharacterList] = useState<CharacterDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const CharacterDataType = await getAllCharacter();
      if (mounted) {
        setCharacterList(CharacterDataType);
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return {
    loading,
    characterList,
  };
}

export type CharacterListHooksType = {
  loading: boolean;
  characterList: CharacterDataType[];
};
