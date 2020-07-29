import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, About, Film } from './pages';
import { Header } from './components';

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/:filmId" component={Film} />
        </Switch>
      </div>
    </>
  );
};

export default App;
