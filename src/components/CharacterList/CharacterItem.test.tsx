import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { formatDate } from "src/shared/helpers/format-date";
import CharacterItem from "./CharacterItem";

const mockedFormatDate = formatDate as jest.Mock<string>;

jest.mock("src/shared/helpers/format-date");

describe("<CharacterItem />", () => {
  afterEach(() => {
    mockedFormatDate.mockReset();
  });

  test("Should render properly", () => {
    mockedFormatDate.mockImplementation(() => "October 09, 2010");
    render(
      <Router>
        <CharacterItem
          id={1}
          name="Luke Skywalker"
          height="172"
          mass="77"
          hair_color="blond"
          skin_color="fair"
          home_world="Tatooine"
          gender="male"
        />
      </Router>
    );

    const titleElement = screen.getByText(/Luke Skywalker/i);
    const genderElement = screen.getByText(/male/i);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveAttribute("href", "/people/1");
    expect(genderElement).toBeInTheDocument();
  });
});
