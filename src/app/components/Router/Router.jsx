import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './../../views/Home';
import Resume from './../../views/Resume';


const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Resume' component={Resume} />
    </Switch>
  );
};

export default Router;