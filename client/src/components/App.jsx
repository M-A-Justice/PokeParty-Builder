import React from 'react';
import Modules from './Modules';
import Modal from './Modal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moduleCount: 0,
      clicked: false,
      abilities: [],
      id: 0,
      moves: [],
      name: '',
      sprites: {},
      stats: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.saveData = this.saveData.bind(this);
    this.swipeData = this.swipeData.bind(this);
  }

  componentDidMount() {
    // fetch users team from database
  }

  swipeData(moduleCount) {
    this.setState({
      moduleCount,
    });
  }

  handleClick(e) {
    const { clicked } = this.state;
    const target = e.target.className;
    if (clicked) {
      if (target.includes('shut-down')) {
        this.setState({
          clicked: false,
        });
      }
    } else {
      this.setState({
        clicked: true,
      });
    }
  }

  saveData() {
    // axios post to db here
  }

  render() {
    const {
      moduleCount,
      clicked,
      id,
      abilities,
      moves,
      name,
      sprites,
      stats,
    } = this.state;
    let modal = 'hide-modal';
    if (clicked === true) {
      modal = 'show-modal';
    }
    if (moduleCount < 6) {
      return (
        <div className="main">
          <Modal className={modal} click={this.handleClick} swipeData={this.swipeData} />
          <div className="nav" />
          <div className="module-container">
            <button className="add-module" type="button" onClick={this.handleClick}>
              <div className="top">
                <div className="middle-circle">
                  <div className="white-in" />
                </div>
              </div>
              <div className="bottom" />
            </button>
            <Modules
              id={id}
              name={name}
              abilities={abilities}
              moves={moves}
              sprites={sprites}
              stats={stats}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="main">
        <div className="nav">
          <div>PokeTeam Creator</div>
          <button className="save-modules" type="button" onClick={this.saveData}>Save</button>
        </div>
        <div className="module-container">
          <Modules />
        </div>
      </div>
    );
  }
}

export default App;
