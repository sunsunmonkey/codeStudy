import React, {  memo, useState } from 'react'
//rmc memo function
import Son from './Son'
const App = memo(() => {
  const [name,setname] = useState('zzk')

  return (
    <div className="" >
        <div onClick={()=>{setname('zk')}}>App</div>
        <Son name={name}></Son>
    </div>
    
  )
})

export default App;