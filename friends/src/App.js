import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './components /PrivateRoute.js'

import FormikLoginForm from './components /LoginForm.js'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Hello! 

          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
        </ul>
        </header>
        <Route path="/login" component={FormikLoginForm} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
