import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import './transition.css';

class App extends Component {
  state = {
    showBalloon: true,
    highlightedItem: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      showBalloon: !prevState.showBalloon,
    }));
  };

  toggleMenuItem = () => {
    console.log('on-exited');
    this.setState(state => ({
      highlightedItem: !state.highlightedItem
    }));
  };

  render() {
    return (
      <div className="container">
        <button
          className={cx('toggler', {
            'toggler--active': this.state.showBalloon,
          })}
          onClick={this.toggle}
        >
          Dropdown
        </button>
        <CSSTransition
          in={this.state.showBalloon}
          timeout={350}
          classNames="balloon"
          unmountOnExit
          appear
          onEnter={() => console.log('on-enter')}
          onEntering={() => console.log('on-entering')}
          onEntered={() => console.log('on-entered')}
          onExit={() => console.log('on-exit')}
          onExiting={() => console.log('on-exiting')}
          onExited={this.toggleMenuItem}
        >
          <div className="menu">
            <ul className="list">
              <li className="list-item">Home</li>
              <li className={cx('list-item', {
                  'list-item-active': this.state.highlightedItem,
                })}
              >
                1. Profile
              </li>
              <li className="list-item">2. Favorites</li>
              <li className="list-item">3. Sign out</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
