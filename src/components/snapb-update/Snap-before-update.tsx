import React from 'react';
import ReactDOM from 'react-dom';

interface IProps{

}

interface IState{
    favoritefood:string,
    var:string
}

class Header extends React.Component <IProps,IState> {
  constructor(props:IProps) {
    super(props);
    this.state = {favoritefood: "rice",var:""};
  }
  componentDidMount():void {
    setTimeout(() => {
      this.setState({favoritefood: "pizza"})
    }, 1000)
  }
  shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any): boolean {
    if(nextState.var !== this.state.var )
    return true
    else 
    return false
  }
  getSnapshotBeforeUpdate(prevProps:IProps, prevState:IState) {
    // console.log(this.state.favoritefood)
    // const a  = this.setState(p =>({favoritefood : p.favoritefood}))
    // if(prevState.var !== this.state.var )
    this.setState({var : "Before the update, the favorite was " + this.state.favoritefood})
    
  }
  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
    // console.log(this.state.favoritefood)
    // if(prevState.var !== this.state.var )
    this.setState({var : "The updated favorite food is " + this.state.favoritefood})
  }
//   componentDidUpdate() {
//     document.getElementById("div2").innerHTML =
//     "The updated favorite food is " + this.state.favoritefood;
//   }
  render() {
    return (
      <div>
        <h1>My Favorite Food is {this.state.favoritefood}</h1>
        <div id="div1">{this.state.var}</div>
        <div id="div2">{this.state.var}</div>
      </div>
    );
  }
}

export default Header