import React from 'react';

interface IProps{
  favoritefood:string
}

interface IState{
  favoritefood:string
}
class Header extends React.Component <IProps,IState> {
  constructor(props : IProps) {
    super(props);
    this.state = {favoritefood: "rice"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritefood: "pizza"})
    }, 1000)
  }
  static getDerivedStateFromProps(props:IProps, state:IState) {
    return {favoritefood: props.favoritefood };
  }
   render() {
    console.log('render')
    return (
      <h1>My Favorite Food is {this.state.favoritefood}</h1>
    );
  }
}
 export default Header