// it's a parent component for Card.js
import React from 'react';
import Card from './Card';

//destructuring can be used in fucntion directly
const CardList = ({ robots }) => {
  //user = currentValue, i = index (see developer.mozilla.org map() method)
  //NOTES, U CAN DON'T USE SPECIAL CONST VARIABLE FOR KEEPING MAP() RESULTS, BUT INPUT IT DIRECTLY AS U SEE BELOW
  // const cardComponent = robots.map((user, i) => {
  //   return <Card key={robots[i].id}  id={robots[i].id} username={robots[i].username} name={robots[i].name} email={robots[i].email} color={robots[i].background}/>
  //})
  //for the educational purposes we place the error generate code here
  // if(true) {
  //   throw new Error('NOOOOO!');
  // }
  return (
    <div>
      { 
        //instead of { cardComponent }, directly
        robots.map((user, i) => {
        return (
            <Card 
              key={robots[i].id} 
              id={robots[i].id} 
              username={robots[i].username} 
              name={robots[i].name} 
              email={robots[i].email} 
              color={robots[i].background}
            />
          );
        })
      }
    </div>
  )
}

export default CardList;