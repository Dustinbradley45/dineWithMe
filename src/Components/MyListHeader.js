import React from 'react';
import { Link } from 'react-router-dom';

const MyListHeader = (props) => {
  return (
    <div className="myListHeader">
       <div className="headerTitle">
        <h1>Let's Dine.</h1>
    
      <h2>Ideas for eats with {props.userName}.</h2>
  </div>
      <Link to="/search" className="mainSearchLink">Search again</Link>

      <button onClick={props.randomizeSelection} className="randomizeButton">Random Choice</button>

      <button onClick={props.removeFullListFromFirebase} className="redirectButton">Clear List</button>
    </div>
  )
}

export default MyListHeader;