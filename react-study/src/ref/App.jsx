import React, { Component } from 'react'
import { forwardRef } from 'react';
import { createRef } from 'react'
const Fuc =forwardRef(function(props,ref){
    return <div ref={ref}>func1</div>   
})

export class App extends Component {
    constructor(){ 
        super();
        this.reff = createRef();
        this.fref =createRef();
    }
    click(){
        console.log(this.reff.current);
        console.log(this.fref.current)
    }
  render() {
    return (
      <>
      <Fuc ref={this.fref}></Fuc>
      <div ref={this.reff}>App</div>
      <h1 onClick={()=>{
        this.click()
      }}>hhh</h1>
      </>
    )
  }
}

export default App