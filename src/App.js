import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './page/home';
import About from './page/about';
import Detail from './page/detail';
import Error from './page/error';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/cocktail/:id' children={<Detail />}></Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
