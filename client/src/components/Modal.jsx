/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import Stats from './Stats';
import Abilities from './Abilities';
import Moves from './Moves';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      names: null,
      abilities: [],
      id: 0,
      moves: [],
      name: '',
      sprites: {},
      stats: [],
      moduleCount: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const pokemonNames = [];
    axios.get('/names')
      .then((res) => {
        res.data.forEach((pokemon) => {
          pokemonNames.push(pokemon.name);
        });
        this.setState({
          names: pokemonNames,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      value: value
    });
    if (value !== '' || value !== 'Please Select A Pokemon') {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${value}/`)
        .then((res) => {
          const response = res.data;

          const tempMoves = [];

          response.moves.map((move) => tempMoves.push(move.move));

          const {
            id,
            name,
            abilities,
            stats,
          } = response;

          const temp = {
            id,
            name,
            abilities,
            sprites: {
              front_default: response.sprites.front_default,
            },
            stats,
            moves: tempMoves,
          };

          this.setState(temp);
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  handleClick() {
    const { swipeData } = this.props;
    const {
      abilities,
      id,
      moves,
      name,
      sprites,
      stats,
      moduleCount,
    } = this.state;
    axios.post('/store', {
      id,
      abilities,
      moves,
      name,
      sprites,
      stats,
    })
      .then((res) => {
        const temp = moduleCount + 1;
        this.setState({
          moduleCount: temp,
        });
        swipeData(moduleCount);
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const {
      names,
      abilities,
      id,
      moves,
      name,
      sprites,
      stats,
    } = this.state;
    const { className, click } = this.props;

    let sprite;

    if (Object.keys(sprites).length === 0) {
      sprite = <div />;
    } else {
      sprite = <img className="modal-image" src={sprites.front_default} alt={'Image of the Pokemon '.concat(name)} />;
    }

    if (names) {
      return (
        <div className={className.concat(' shut-down')} role="button" tabIndex={0} onClick={click} onKeyDown={click}>
          <div className="modal-inner">
            <div className="button-container">
              <div className="pokemon id">
                Pokemon ID No.
                {' '.concat(id)}
              </div>
              <button type="button" className="exit shut-down" onClick={click}>Close</button>
            </div>
            <div className="selector-container">
              <select id="pokemon-select" onChange={this.handleChange}>
                <option id="default">Please Select A Pokemon</option>
                {names.map((pokemon) => <option value={pokemon}>{pokemon}</option>)}
              </select>
            </div>
            <div className="info-container">
              <div className="pokemon-sprites">
                {sprite}
              </div>
              <div className="info">
                <div className="stats-title">
                  <Stats className="pokemon-stats" key={'stats'.concat(id.toString())} stats={stats} id={id} />
                </div>
                <Abilities className="pokemon-abilities" key={'abilities'.concat(id.toString())} abilities={abilities} id={id} />
                <div className="moves-title">
                  <Moves className="pokemon-moves" key={'moves'.concat(id.toString())} moves={moves} id={id} />
                </div>
              </div>
            </div>
            <div className="add-container">
              <button type="button" className="add-to-team shut-down" onClick={this.handleClick}>Add to Team</button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={className}>
        <div className="modal-inner">
          <select id="pokemon-select">
            Loading...
          </select>
        </div>
      </div>
    );
  }
}

export default Modal;
