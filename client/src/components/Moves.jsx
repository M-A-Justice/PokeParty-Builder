/* eslint-disable react/prop-types */
import React from 'react';
import Move from './Move';

const Moves = (props) => {
  const { moves, className } = props;
  return (
    <ul className={className}>
      {moves.map((move) => <Move key={move.move.name} move={move.move.name} />)}
    </ul>
  );
};

export default Moves;
