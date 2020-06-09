/* eslint-disable react/prop-types */
import React from 'react';

const Stat = (props) => {
  const { name, effort, base } = props;
  return (
    <li>
      <ul>
        <li>{name.concat(': ').concat(base)}</li>
        <li>{'effort values :'.concat(effort)}</li>
        <li className="space" />
      </ul>
    </li>
  );
};

export default Stat;
