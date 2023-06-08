import React, { PureComponent } from 'react'
import { Textcontext } from './Textcontext'
//有点类似于拦截组件
export default function enhance_func(Orgin){
class New extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            color:"red"
        }
    }
      render() {
        return (
        <Textcontext.Consumer>
            {
                value=> <Orgin style={{...this.state,...value}} {...this.props}>hhhh</Orgin>

            }
        </Textcontext.Consumer>
 
        )
      }
    }
    return New

}