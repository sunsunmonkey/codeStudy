import React, { Component, memo, useState } from 'react'
//rmc memo function
const App = memo(function () {
    const [counter, setCounter] = useState(0)
    return (
        <div className="">   <button onClick={e=>{setCounter(counter+1)} }>{counter}</button><J count={1}></J></div>

    )
})
const J  =memo(function J() {
    console.log("render");
    return <h1>1616</h1>
}
)

export default App;