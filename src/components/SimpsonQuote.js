import React from 'react';
  
function SimpsonQuote({ simpson }) {
  return (
    <div className="SimpsonQuote"> 
      <img
        src={simpson.image}
        alt={simpson.character}
      />
      <div>Name : {simpson.character} </div>
      <div>Citation : {simpson.quote}</div>
    </div>
  );
};
  
export default SimpsonQuote;