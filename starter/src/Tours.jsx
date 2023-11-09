import React from 'react';
import Tour from './Tour';

function Tours({ tours, removeButton }) {
  return (
    <div>
      {tours.map((tour, index) => (
        <Tour key={index} {...tour} removeButton={removeButton}/>
      ))}
    </div>
  );
}

export default Tours;