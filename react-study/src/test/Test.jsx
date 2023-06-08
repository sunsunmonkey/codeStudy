import React, { PureComponent } from 'react'

export class Test extends PureComponent {
    // 可以不显式传props,但最好不要
    constructor(){
        super();
        this.state = 1
    }
    componentDidMount(){
        console.log(this.props);
    }
  render() {
    return (
      <div {...this.props}>Test<h1>111</h1></div>
      
    )
  }
}

export default Test