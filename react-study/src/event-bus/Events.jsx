import React, { Component } from 'react'
import eventBus from './event'

export class Event extends Component {
    componentDidMount(){
        // 注意this同onClick的绑定
        eventBus.on("hhh",(a,b)=>{
            console.log("event"+a+b);
        })
    }
  render() {
    return (
     
      <div>Event</div>
    )
  }
}

export default Event