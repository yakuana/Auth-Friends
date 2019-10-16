import React from 'react';
import { friendStyles } from '../material-ui-styles/friendStyles.js'

const Friend = ({ props, index }) => {

  const style = friendStyles(); 
  
  return (
    <div className={style.item}>
      <p>{index}</p>
      <h2 className="friend-name">{props.name}</h2>
      <p className="friend-age">{props.age}</p>
      <p className="friend-email">{props.email}</p>
    </div>
  );
};

export default Friend;