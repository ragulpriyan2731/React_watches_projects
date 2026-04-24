import {Link} from 'react-router-dom'

const Touchlink=()=>{
    return(
        <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Posts">Posts</Link>
        </nav>
       
    )
}
export default Touchlink