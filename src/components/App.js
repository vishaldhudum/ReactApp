// Libraries
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// constants
import { Home, Login} from '../constants/components';

import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/" exact />
          <PrivateRoute component={Home} path="/home" exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
