import React, {  memo, useState , useMemo, useRef} from 'react'
//rmc memo function

const App = memo(() => {
  const [name,setname] = useState('zzk')
  const [count,setCount] = useState(0)
  const b = useRef(
    {
      name:111
    }
  )
  const a = useMemo(()=>{
    return {
      name:111
    }
  },[count])
  const c = {
    name:111
  }
  console.log('APP')
  return (

        <button onClick={()=>{setname(a)}} >App </button>

    )
})

export default App;