import React from 'react';

//get state serachfield and props searchChange from parent component and destructure it in function parameters
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input className="pa3 ba b--green bg-lightest-blue" 
             type="search" 
             placeholder="search robots"
             onChange={searchChange}/>
    </div>
  )

}

export default SearchBox;