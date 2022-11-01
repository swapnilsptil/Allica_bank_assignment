import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import CharacterDetailContent from './CharacterDetailContent';

// import { CHARACTER_DETAIL_MOCK_DATA } from 'src/shared/constants/mock-data.constant';

describe('<CharacterDetailContent />', () => {
  test('Should render properly', () => {
    render(
      <Router>
        <CharacterDetailContent
          title='Luke Skywalker'
          director='19BBY'
          producer='male'
          description={`blond - fair`}
          characters={['X-wing', 'Imperial shuttle']}
          planets={[
            'A New Hope',
            'The Empire Strikes Back',
            'Return of the Jedi',
            'Revenge of the Sith',
          ]}
          species={[]}
          starships={['X-wing', 'Imperial shuttle']}
          vehicles={['Snowspeeder', 'Imperial Speeder Bike']}
        />
      </Router>
    );

    const backLinkElement = screen.getByText(/Back to list/i);
    const titleElement = screen.getByText(/blond/i);
    const directorElement = screen.getByText(/Luke Skywalker/i);
    const speciesElement = screen.getByText(
      /we don't have any Species data yet!/i
    );

    expect(backLinkElement).toBeInTheDocument();
    expect(backLinkElement).toHaveAttribute('href', '/');
    expect(titleElement).toBeInTheDocument();
    expect(directorElement).toBeInTheDocument();
    expect(speciesElement).toBeInTheDocument();
  });
});
