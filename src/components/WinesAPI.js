import React from 'react';
import '../App.css';
import Wines from './Wines';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function WinesAPI() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/wines">Wines</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/wines">
                <Wines />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}
export default WinesAPI;