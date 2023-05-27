import React, { Component } from 'react'

interface IProps{

}

interface IState{
    count : number
    isDisplay : boolean
}

class Counter extends Component<IProps,IState> {
    constructor(props:IProps) {
      super(props)
    
      this.state = {
         count : 0,
         isDisplay : true
      }
      console.log(" 1-constructor executed")
    }

    static getDerivedStateFromProps():void{
        console.log("2-getDerivedStateFromProps executed")
    }


    componentDidMount(): void {
        console.log("4-compoent Did mount Executed")

        // setTimeout(()=>{
        //         this.setState({count : 1})
        // },5000)
    }

    shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any): boolean {

        console.log("5-shouldComponentUpdate executed")
        return true
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>) {
        console.log("6-getSnapshotBeforeUpdate is executed")
        console.log(prevState.count)
        console.log(this.state.count)
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
        console.log("7-compoentDidUpdate executed")
        
    }

    
    handleClick=()=>{
        this.setState(p=>({count : p.count + 1}))
    }

    handleDispalyCounter=()=>{
        this.setState(p=>({isDisplay : !p.isDisplay}))
    }


    render() {
        console.log("3-render method executed")
        return (
          <div>
            <p>Count: {this.state.count}</p>
            <button onClick={() => this.handleClick()}>Increment</button>
            <button onClick={this.handleDispalyCounter}>Delete Counter</button>
            {this.state.isDisplay && <CounterHeader/>}
          </div>
        );
      }
}

class CounterHeader extends Component{

    componentWillUnmount(): void {
        console.log("compoentWillUnMount executed")
        alert("will you want to remove the Counter")
    }

    render(){
        return(
            <h1>Counter App</h1>
        )
    }
}


export default Counter