import React, { Component } from 'react'
import eventBus from './event'
import Event from './Events'
export class App extends Component {
    click() {
        console.log("app")
        eventBus.emit("hhh", "1", "2")
    }
    render() {
        return (
            <>
                <div onClick={() => { this.click() }}>App </div>
                <Event></Event>
            </>


        )
    }
}

export default App
