import React from 'react';

const Friend = ({ props }) => {
  return (
    <div className="friend-container">
      <h2 className="friend-name">{props.name}</h2>
      <p className="friend-age">Age: {props.age}</p>
      <p className="friend-email">Email: {props.email}</p>
    </div>
  );
};

export default Friend;