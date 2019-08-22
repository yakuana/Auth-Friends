import React from 'react';

const Friend = ({ props, index }) => {

  console.log(index)
  return (
    <div className="friend-container">
      <h2 className="friend-name">{props.name}</h2>
      <p className="friend-age">{props.age}</p>
      <p className="friend-email">{props.email}</p>
    </div>
  );
};

export default Friend;