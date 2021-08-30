import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './header';
import FormOne from './formOne';
import FormTwo from './formtwo';
import FormThree from './formThree';
import FormFour from './formFour';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/formthree' component={FormThree} />
          <Route path='/formtwo' component={FormTwo} />
          <Route path='/formfour' component={FormFour} />
          <Route path='/' component={FormOne} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
