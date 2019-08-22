// react imports 
import React from 'react';
import { connect } from 'react-redux';
import { PulseSpinner } from 'react-spinners-kit';

// actions  
import { getFriendsData } from '../actions/index.js';

// components 
import Friend from './Friend.js';

const FriendsList = props => {
  return (
    <div className="master-container">
      <div className="friends-btn" onClick={props.getFriendsData}>
        {props.dataIsLoading ? (
          <PulseSpinner size={30}
          color="#686769"
          loading={props.isLoading}
          />
        ) : (
          <button className="friends-btn">Get Friends</button>
        )}
      </div>

      <div className="friends-container">
        {props.friends && 
          props.friends.map(friend => <Friend key={friend.id} props={friend} />)}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dataIsLoading: state.dataIsLoading,
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { getFriendsData }
)(FriendsList);