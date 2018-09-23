import React from 'react';
import './Card.css';

const Card = (props) => {  
  const { name, email, username } = props;
  return (
    <div className={`bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5`}>
      {/*<h1>RoboFriends</h1>*/}
      <img src={`https://robohash.org/${name}?200x200`}  alt="robot Jane"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{username}</p>
      </div>
    </div>
  );
}

export default Card;