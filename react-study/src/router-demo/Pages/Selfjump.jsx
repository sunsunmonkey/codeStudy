import React, { PureComponent } from 'react'
import withRouter from '../hoc/withroute'

export class Selfjump extends PureComponent {
navigateto(path){
    const {navigate} = this.props.router
    navigate(path)
}
  render() {
    return (
      <h1 onClick={e=>this.navigateto("/home")}>Selfjump</h1>
    )
  }
}

export default withRouter( Selfjump)