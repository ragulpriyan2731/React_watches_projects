import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Posts from './posts'
import Touchlink from './Link'



const Myrouter=()=>{
    return(
       <Router>
            <Touchlink />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/posts' element={<Posts />}/>
         </Routes>
        </Router>
    ) 
}
export default Myrouter