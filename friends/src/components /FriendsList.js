// react imports 
import React from 'react';
import { connect } from 'react-redux';
import { PulseSpinner } from 'react-spinners-kit';

// actions  
import { getFriendsData } from '../actions/index.js';

// components 
import Friend from './Friend.js';

import { friendListStyles } from '../material-ui-styles/friendsListStyles.js';

const FriendsList = props => {

  const style = friendListStyles(); 
  
  return (
    <div className="master-container">
      <div className="friends-btn" onClick={props.getFriendsData}>
        {props.dataIsLoading ? (
          <button className={style.button}><PulseSpinner size={30}
          color="#686769"
          loading={props.isLoading}
          /></button>
        ) : (
          <button className={style.button}>Get Friends</button>
        )}
      </div>
      
      <div className={props.friends.length !== 0 ? style.list : ""}>
        {props.friends && 
          props.friends.map((friend, index) => <Friend key={friend.id} props={friend} index={index} />)}
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