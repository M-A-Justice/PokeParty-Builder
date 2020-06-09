/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import Stat from './Stat';

const Stats = (props) => {
  const { stats, id, className } = props;
  // eslint-disable-next-line arrow-body-style
  return (
    <ul className={className}>
      {stats.map((stat) => <Stat key={id.toString() + stat.stat.name} base={stat.base_stat} effort={stat.effort} name={stat.stat.name} />)}
    </ul>
  );
};

export default Stats;
