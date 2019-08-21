import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './components /PrivateRoute.js';

// components 
import FormikLoginForm from './components /LoginForm.js';
import FriendsList from './components /FriendsList.js';
import AddFriendForm from './components /AddFriendForm.js';

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
              <Link to="/friends">Protected Page</Link>
            </li>
        </ul>
        <Route path="/login" component={FormikLoginForm} />
        <PrivateRoute exact path="/friends" component={AddFriendForm} />
        <PrivateRoute exact path="/friends" component={FriendsList} />
        </header>
        
      </div>
    </Router>
  );
}

export default App;
