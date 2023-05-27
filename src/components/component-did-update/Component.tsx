import React, { Component } from 'react';

interface IProps{

}

interface IState{
    count:number
}

class ExampleComponent extends Component <IProps,IState> {
  constructor(props : IProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidUpdate(prevProps : IProps, prevState : IState) {
    if (prevState.count !== this.state.count) {
      console.log('Count has been updated:', this.state.count);
    }
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.handleClick()}>Increment</button>
      </div>
    );
  }
}

export default ExampleComponent;