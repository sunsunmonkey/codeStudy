import React, { Component } from 'react'

import { PropTypes } from 'prop-types';
export class Son extends Component {
    a =1;
  render() {
    return (
     <button onClick={()=>{
        this.props.jia();
    }}>1</button>
    )
  }
}
Son.propTypes ={
    name:PropTypes.string,
}
export default Son