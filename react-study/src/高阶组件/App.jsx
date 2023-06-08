import React, { PureComponent } from 'react'
import { Textcontext } from './Textcontext'
import Text from './Text'

export class App extends PureComponent {
  render() {
    return (
        <Textcontext.Provider value={{backgroundColor:"black"}}>
            <Text id={123}></Text>
             <div>App</div>
        </Textcontext.Provider>
 
    )
  }
}

export default App