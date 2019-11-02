import React from 'react';
import './Card.styles.css';

export const Card = (props) => (
  <div className="card-container">
    <img src={`https://www.robohash.org/${props.monster.id}?set=set2&size=300x300`} alt={`Monster ${props.monster.name}`}/>
    <h1>
      {props.monster.name}
    </h1>
  </div>
)