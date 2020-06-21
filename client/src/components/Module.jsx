/* eslint-disable react/prop-types */
import React from 'react';
import Stat from './Stat';

const Module = (props) => {
  const {
    sprites,
    id,
    moves,
    name,
    stats,
  } = props.pokemon;

  const title = id.toString().concat('.');

  return (
    <div className="single-pokemon">
      <div className="pokemon-container2">
        <div className="pokemon-title">
          <div className="pokemon-id">{title}</div>
          <div className="pokemon-name">{name}</div>
        </div>
        <div className="pokemon-sprite">
          <img className="thumbnail" src={sprites.front_default} alt={'Image of the Pokemon '.concat(name)} />
        </div>
      </div>
      <div className="pokemon-container1">
        <div className="module-stats">
          <div className="stat-title">
            Stats:
          </div>
          {stats.map((stat) => {
            return (
              <div className="individual">
                <div className="module-space">{stat.stat.name.concat(': ').concat(stat.base_stat)}</div>
                <div className="module-space">{'effort values :'.concat(stat.effort)}</div>
                <div className="module-space" />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Module;
