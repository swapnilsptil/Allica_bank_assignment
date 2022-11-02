import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import useCharacterList from "src/shared/hooks/useCharacterList";
import CharacterList from "./CharacterList";

jest.mock("src/shared/hooks/useCharacterList");

const mockeduseCharacterList = useCharacterList as jest.Mock;

describe("<CharacterList />", () => {
  afterEach(() => {
    mockeduseCharacterList.mockReset();
  });

  test("Should render Loader Component on loading", () => {
    mockeduseCharacterList.mockImplementation(() => {
      return {
        loading: true
      };
    });

    render(
      <Router>
        <CharacterList />
      </Router>
    );

    const loader = screen.getByTestId(/loader/i);
    expect(loader).toBeInTheDocument();
  });

  test("Should render Movie List properly", () => {
    mockeduseCharacterList.mockImplementation(() => {
      return {
        loading: false,
        characterList: [
          {
            id: 1,
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            home_world: "Tatooine",
            gender: "male"
          },
          {
            id: 2,
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "brown",
            skin_color: "white",
            home_world: "Tatooine",
            gender: "male"
          },
          {
            id: 3,
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "gray",
            skin_color: "light",
            home_world: "Tatooine",
            gender: "male"
          }
        ]
      };
    });

    render(
      <Router>
        <CharacterList />
      </Router>
    );

    const nameElement = screen.getAllByText(/Luke Skywalker/i);
    const heightElement = screen.getAllByText(/HomeWorld/i);
    const linkElement = screen.getAllByText(/gender/i);

    expect(nameElement).toHaveLength(3);
    expect(heightElement).toHaveLength(3);
    expect(linkElement).toHaveLength(3);
  });
});
