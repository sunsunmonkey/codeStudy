import { Link } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { Suspense } from 'react'
export default function App(){
    return(
        <div>
            <Suspense fallback={<div style={{background:"black"}}>11111</div>}>
            <header><Link to="/home">home</Link> Header</header>
            {useRoutes(routes)}
            <div>Bottom</div>
            </Suspense>
       
        </div>
    )
}