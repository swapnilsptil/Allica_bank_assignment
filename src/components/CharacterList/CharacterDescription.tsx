import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { COLOR_WHITE } from "src/shared/styles/themes/colors";

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
  home_world,
  gender
}: CharacterDescriptionProps) {
  return (
    <>
      <CharacterDescriptionStyle>
        {/* {`${hair_color !== 'n/a' ? hair_color : ''} / ${
          skin_color !== 'n/a' ? skin_color : ''
        }`} */}
        HomeWorld : {home_world}
      </CharacterDescriptionStyle>
      <CharacterDescriptionStyle>Gender : {gender}</CharacterDescriptionStyle>
      {/* <CharacterDescriptionStyle>
        Height: {height} / Mass : {mass}{' '}
      </CharacterDescriptionStyle> */}
    </>
  );
}

export type CharacterDescriptionProps = {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  home_world: string;
  gender: string;
};

CharacterDescription.propTypes = {
  height: PropTypes.string,
  mass: PropTypes.string,
  hair_color: PropTypes.string,
  skin_color: PropTypes.string,
  gender: PropTypes.string
};
