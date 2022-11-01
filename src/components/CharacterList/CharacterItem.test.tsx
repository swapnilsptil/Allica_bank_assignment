import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { formatDate } from 'src/shared/helpers/format-date';
import CharacterItem from './CharacterItem';

const mockedFormatDate = formatDate as jest.Mock<string>;

jest.mock('src/shared/helpers/format-date');

describe('<CharacterItem />', () => {
  afterEach(() => {
    mockedFormatDate.mockReset();
  });

  test('Should render properly', () => {
    mockedFormatDate.mockImplementation(() => 'October 09, 2010');
    render(
      <Router>
        <CharacterItem
          id={1}
          name='Luke Skywalker'
          height='172'
          mass='77'
          hair_color='blond'
          skin_color='fair'
        />
      </Router>
    );

    const titleElement = screen.getByText(/Luke Skywalker/i);
    const skinColorElement = screen.getByText(/fair/i);
    const heightElement = screen.getByText(/172/i);
    const massElement = screen.getByText(/77/i);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveAttribute('href', '/people/1');
    expect(skinColorElement).toBeInTheDocument();
    expect(heightElement).toBeInTheDocument();
    expect(massElement).toBeInTheDocument();
  });
});
