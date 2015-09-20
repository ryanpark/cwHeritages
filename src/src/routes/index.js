import {Route} from 'react-router';
import React from 'react';
import CoreLayout from 'layouts/CoreLayout';
import Home from 'components/Home';

export default (
  <Route component={CoreLayout}>
    <Route path="/" component={Home} />
  </Route>
);
