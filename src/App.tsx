import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import GlobalStyle from './shared/styles/base/global';

const Header = loadable(() => import('./components/Header/Header'));
const CharacterList = loadable(() =>
  import('./components/CharacterList/CharacterList')
);
const MovieDetail = loadable(() =>
  import('./components/CharacterDetail/CharacterDetail')
);

export default function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path='/people/:id'>
          <MovieDetail />
        </Route>
        <Route path='/'>
          <CharacterList />
        </Route>
      </Switch>
      <GlobalStyle />
    </Fragment>
  );
}
