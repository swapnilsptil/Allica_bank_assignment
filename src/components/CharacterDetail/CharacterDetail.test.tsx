import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import CharacterDetail from './CharacterDetail';
import useCharacterDetail from 'src/shared/hooks/useCharacterDetail';

import { CHARACTER_DETAIL_MOCK_DATA } from 'src/shared/constants/mock-data.constant';

jest.mock('src/shared/hooks/useCharacterDetail');

const mockedUseCharacterDetail = useCharacterDetail as jest.Mock<any>;

describe('<CharacterDetail />', () => {
  afterEach(() => {
    mockedUseCharacterDetail.mockReset();
  });

  test('Should render Loader component', () => {
    mockedUseCharacterDetail.mockImplementation(() => {
      return {
        loading: true,
      };
    });
    const { getByTestId } = render(
      <Router>
        <CharacterDetail />
      </Router>
    );

    expect(getByTestId(/loader/i)).toBeInTheDocument();
  });

  test('Should render Character Detail properly', () => {
    mockedUseCharacterDetail.mockImplementation(() => {
      return {
        loading: false,
        characterDetail: {
          id: 1,
          name: 'Luke Skywalker',
          height: '111',
          mass: '187',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
          homeworld: 'https://swapi.dev/api/planets/1/',
          films: [
            'A New Hope',
            'The Empire Strikes Back',
            'Return of the Jedi',
            'Revenge of the Sith',
          ],
          species: [],
          vehicles: ['Snowspeeder', 'Imperial Speeder Bike'],
          starships: ['X-wing', 'Imperial shuttle'],
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-09T13:50:51.644000Z',
          url: 'https://swapi.dev/api/people/1/',
        },
      };
    });
    const { getByText } = render(
      <Router>
        <CharacterDetail />
      </Router>
    );

    expect(getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(getByText(/Revenge of the Sith/i)).toBeInTheDocument();
    expect(getByText(/male/i)).toBeInTheDocument();
    expect(getByText(/19BBY/i)).toBeInTheDocument();
    expect(getByText(/fair/i)).toBeInTheDocument();
    expect(getByText(/blond/i)).toBeInTheDocument();
    expect(
      getByText(/We don't have any Species data yet!/i)
    ).toBeInTheDocument();
    expect(getByText(/Snowspeeder/i)).toBeInTheDocument();
  });
});
