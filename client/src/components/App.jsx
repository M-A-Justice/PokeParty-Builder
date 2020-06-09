import React from 'react';
import Modules from './Modules';
import Modal from './Modal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moduleCount: 0,
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // fetch users team from database
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

  render() {
    const { moduleCount, clicked } = this.state;
    let modal = 'hide-modal';
    if (clicked === true) {
      modal = 'show-modal';
    }
    if (moduleCount < 6) {
      return (
        <div className="main">
          <Modal className={modal} click={this.handleClick} />
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
            <Modules />
          </div>
        </div>
      );
    }
    return (
      <div className="main">
        <div className="nav">Header</div>
        <div className="module-container">
          <Modules />
        </div>
      </div>
    );
  }
}

export default App;
