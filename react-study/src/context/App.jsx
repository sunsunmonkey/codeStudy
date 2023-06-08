import React, { Component } from 'react'
import { Themecontext, Textcontext } from './context'
import Text from './Text'
export class App extends Component {
    render() {
        return (
            <Themecontext.Provider value={{color:"blue"}}>
                <div style={{ ...this.context }}>App</div>
                <Text></Text>
                {/* 函数式组件有时要这要传参 */}
                <Textcontext.Consumer>
                    {
                        function (value) {
                            return <h1>{value}</h1>
                        }
                    }
                </Textcontext.Consumer>

            </Themecontext.Provider>



        )
    }
}
App.contextType = Themecontext;
export default App