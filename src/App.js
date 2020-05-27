import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import About from './pages/AboutUs'
import Contact from './pages/Contact'
import {
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
      <Switch>
        <Route path="/contact" component={Contact}>
        </Route>
        <Route path="/about" component={About}>
        </Route>
        <Route path="/" component={Home} exact>
        </Route>
      </Switch>

      );
}

export default App;
