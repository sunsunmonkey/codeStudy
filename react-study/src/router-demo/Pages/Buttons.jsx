import React, { PureComponent } from 'react'
import { Button } from 'antd'
import { Outlet } from 'react-router-dom'
export class Buttons extends PureComponent {
  render() {
    return (
      <div className="">
        <Button>
          {this.props.children}
        </Button>
        <Outlet></Outlet>
      </div>

    )
  }
}

export default Buttons