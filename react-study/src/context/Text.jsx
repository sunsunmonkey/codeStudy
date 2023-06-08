import React, { Component } from 'react'
import { Themecontext } from './context'


export class Text extends Component {
  render() {
    return (
        
      <div style={this.context}>jjjj</div>
    )
  }
}
Text.contextType =Themecontext
export default Text