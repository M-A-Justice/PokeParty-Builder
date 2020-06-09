/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import Ability from './Ability';

const Abilities = (props) => {
  const { abilities, className, id } = props;

  return (
    <ul className={className}>
      {abilities.map((ability) => <Ability key={id.toString() + ability.ability.name} ability={ability.ability.name} />)}
    </ul>
  );
};

export default Abilities;
