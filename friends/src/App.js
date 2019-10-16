import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './components /PrivateRoute.js';

// components 
import FormikLoginForm from './components /LoginForm.js';
import FriendsList from './components /FriendsList.js';
import AddFriendForm from './components /AddFriendForm.js';

function App(props) {

  console.log("app props", props)
  
  
  // hook keeps track of token status (if token exists )
  const [isloggedIn, setLogin] = useState(false);

  // update login if change has occured 
  useEffect(() => {
      if (!props.credIsLoading) {
          setLogin(true)
      }
  }, [props.credIsLoading]); 


  return (
    <Router>
      <div className="App">
           {!isloggedIn ? 
            <ul>
              <li>
                  <Link to="/login">Login</Link>
              </li>
              <li id="friends-list-tab">
                <Link to="/login">FriendsList</Link>
              </li>
            </ul> :
            <ul>
              <li id="friends-list-tab">
                <Link to="/friends">FriendsList</Link>
              </li>
              <li>
                  <Link to="/login" onClick={() => {localStorage.removeItem("token"); setLogin(false); return "hello"}}>Logout</Link>
              </li>
              <li>
                <Link to="/add-friends">Add Friends</Link>
              </li>
            </ul>
          }

          <div className="components-container">
            <Route path="/login" component={FormikLoginForm} />
            <PrivateRoute exact path="/add-friends" component={AddFriendForm} />
            <PrivateRoute exact path="/friends" component={FriendsList} />
          </div>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
      credIsLoading: state.credIsLoading,
      };
  };
  
  export default connect(
      mapStateToProps,
      {}
)(App);
