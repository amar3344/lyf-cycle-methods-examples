import React, { Component } from 'react';
import ReactDOM from 'react-dom';

interface IProps{

}

interface IState{
    favoriteFood:string
}

class Header extends Component <IProps,IState> {
  constructor(props:IProps) {
    super(props);
    this.state = { favoriteFood: 'rice' };
  }

  shouldComponentUpdate(nextProps:IProps, nextState:IState) {
    // Only re-render if the favoriteFood state has changed
    return this.state.favoriteFood !== nextState.favoriteFood;
  }

  changeFood = () => {
    this.setState({ favoriteFood: 'Pizza' });
  }

  render() {
    return (
      <div>
        <h1>My Favorite Food is {this.state.favoriteFood}</h1>
        <button type="button" onClick={this.changeFood}>Change food</button>
      </div>
    );
  }
}

export default Header