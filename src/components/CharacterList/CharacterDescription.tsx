import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { COLOR_WHITE } from 'src/shared/styles/themes/colors';

const CharacterDescriptionStyle = styled.p`
  font-family: inherit;
  color: ${COLOR_WHITE};
  overflow-wrap: break-word;
  white-space: normal;
  margin-bottom: 2.5rem;
`;

export default function CharacterDescription({
  height,
  mass,
  hair_color,
  skin_color,
}: CharacterDescriptionProps) {
  return (
    <>
      <CharacterDescriptionStyle>
        {`${hair_color !== 'n/a' ? hair_color : ''} / ${
          skin_color !== 'n/a' ? skin_color : ''
        }`}
      </CharacterDescriptionStyle>
      <CharacterDescriptionStyle>
        Height: {height} / Mass : {mass}{' '}
      </CharacterDescriptionStyle>
    </>
  );
}

export type CharacterDescriptionProps = {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
};

CharacterDescription.propTypes = {
  height: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  hair_color: PropTypes.string.isRequired,
  skin_color: PropTypes.string.isRequired,
};
