import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Label, Text } from "./CharacterDetail.style";

export default function CharacterDetailDescription({
  description
}: CharacterDetailDescriptionProps) {
  return (
    <Wrapper>
      <Label>Description</Label>
      <Text>{description}</Text>
    </Wrapper>
  );
}

export type CharacterDetailDescriptionProps = {
  description: string | null;
};

CharacterDetailDescription.propTypes = {
  description: PropTypes.string
};
