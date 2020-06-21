import React from 'react';
import axios from 'axios';
import Module from './Module';

class Modules extends React.Component {
  constructor() {
    super();

    this.state = {
      team: [],
    };
  }

  componentDidMount() {
    axios.get('/pokemon')
      .then((result) => {
        this.setState({
          team: result.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { team } = this.state;

    if (team.length > 0) {
      return (
        <div className="pokemon">
          {team.map((pokemon) => <Module pokemon={pokemon} />)}
        </div>
      );
    }
    return (
      <div />
    );
  }
}

export default Modules;
