import React, { PureComponent } from 'react'
import { addNumber, subNumber } from './store/counter'
import { connect } from 'react-redux'
import { fetchHomeMultidataAction } from './store/counter'
import jsonBig from 'json-bigint'


export class App extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidataAction()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": "sunsunmonkey",
      "password": ""
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://47.108.221.20:2333/user/login", requestOptions)
      .then(response => response.text())
      .then(result => console.log(jsonBig.parse(result)))
      .catch(error => console.log('error', error));
  }
  render() {
    const { banners } = this.props
    return (
      <div>
        {
          banners.map((item, index) => {
            return <li key={index}>{item.title}</li>
          })
        }
        <div>{this.props.counter}</div>
        <button onClick={e => { this.props.addNum(5) }}>+5</button>
      </div>

    )
  }
}
const mapStateToProps = (state) => ({
  //注意要加上在哪个模块
  counter: state.counter.counter,
  banners: state.counter.banners,
  recommends: state.counter.recommends
})
const mapDispatchToProps = (dispatch) => ({
  addNum(num) {
    dispatch(addNumber(num))
  },
  subNum(num) {
    dispatch(subNumber(num))
  },
  fetchHomeMultidataAction() {
    dispatch(fetchHomeMultidataAction())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(App) 