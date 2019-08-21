import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './components /PrivateRoute.js';

// components 
import FormikLoginForm from './components /LoginForm.js';
import FriendsList from './components /FriendsList.js';

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
        <Route path="/login" component={FormikLoginForm} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        </header>
        
      </div>
    </Router>
  );
}

export default App;
