import React, { PureComponent } from 'react'

import { connect } from "react-redux"
import { addNum,subNum,fetchsomething } from '../store/actionCreators'
export class Home extends PureComponent {
  addNumber(num) {
    this.props.addNumber(num)
  }

  subNumber(num) {
    this.props.subNumber(num)
  }
  render() {
    const { counter,name } = this.props
    
    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <button onClick={e => this.addNumber(8)}>+8</button>
        <button onClick={e => this.subNumber(8)}>-8</button>
        <div><button onClick={e=> {this.props.fetchsomething()}}>get</button></div>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
})

const mapDispatchToProps = dispatch => ({
  addNumber: function(num) {
    dispatch(addNum(num))
  },
  subNumber: function(num) {
    dispatch(subNum(num))
  },
  fetchsomething(){
    dispatch(fetchsomething())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
