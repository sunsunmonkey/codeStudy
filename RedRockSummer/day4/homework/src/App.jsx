
import useDebounce from './hooks/useDebounce'
import useRouter from './hooks/useRouter'
import useThrottle from './hooks/useThrottle'

import { MyLink } from './hooks/useRouter'

function App() {

  function ajax(content) {
    console.log('ajax request ' )
  }
  

  const debounce = useDebounce(ajax,500)
  const Throttle = useThrottle(ajax,1000)


  useRouter()

  return (
      <>
        <h1>防抖</h1>
        <input type="text" onKeyUp={debounce}/>
        <h1>节流</h1>
        <input type="text"  onKeyUp={Throttle}/>
        <div className="div">
        <MyLink to="/home">home</MyLink>
        <MyLink to="/user">用户</MyLink>
        </div>
        <div id="route-view"></div>
      </>)

  
}

export default App
