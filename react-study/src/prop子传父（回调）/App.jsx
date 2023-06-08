import React, { Component } from 'react'
import Son from './Son';
export class App extends Component {
  constructor(){
    super();
    this.state = {
      counter:0
    }
  }
  jia(){
    const {counter} = this.state;
    this.setState({
      //其实没改变couter只是将counter+1赋给counter属性所以不会报错
      counter:counter+1,
    });
  }
  render() {
    const {counter} = this.state;
    return (
      <>
       <div >{counter}</div>
       <Son jia={()=>{this.jia()}}/>
       <Son name={"hhh"} jia={()=>{this.jia()}}></Son>
      </>
     
    )
  }
}

export default App