import React, { PureComponent } from 'react'
import store from './store';
import { addNum, subNum } from './store/actionCreators';
import Home from './Page/Home';
import Banner from './Page/Banner';
export class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
        counter : store.getState().counter
    }
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
        const state = store.getState()
        this.setState({
            counter:state.counter
        })
    })
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  addNumber(count) {
    store.dispatch(addNum(count))
  }

  subNumber(count) {
    store.dispatch(subNum(count))
  }

  render() {
    const {counter} = this.state;

    return (
        <div>
        <h2>App Counter: {counter}</h2>
        <button onClick={e => this.addNumber(1)}>+1</button>
        <button onClick={e => this.addNumber(5)}>+5</button>
        <button onClick={e => this.subNumber(1)}>-1</button>
        <button onClick={e => this.subNumber(5)}>-5</button>
        <Home/>
        <Banner></Banner>
      </div>
    )
  }
}

export default App
