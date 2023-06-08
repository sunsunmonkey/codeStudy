import React, { PureComponent } from 'react'
import enhance_func from './enhance_func'

 class Text extends PureComponent {
  render() {
    return (
      <div {...this.props}>{this.props.children}Text</div>
    )
  }
}

export default enhance_func(Text) 