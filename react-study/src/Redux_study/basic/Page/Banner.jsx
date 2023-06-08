import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
export class Banner extends PureComponent {

  render() {
    const { recommends, banners} = this.props
    return (

        <div>
            <h1>轮播</h1>
            <ul>
            {recommends.map((item,index)=>{
                return <li key={index}>{item.title}</li>
            })}
            </ul>
            <h1>推荐</h1>
            <ul>
            {banners.map((item,index)=>{
                return <li key={index}>{item.title}</li>
            })}
            </ul>
        </div>

    )
  }
}
const mapStateToProps = state => ({
    recommends: state.recommends,
    banners: state.banners
  })

  
export default connect(mapStateToProps)(Banner)
