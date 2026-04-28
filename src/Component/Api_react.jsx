import axios from 'axios'
import { useEffect, } from 'react'


const Application =()=>{
    // const [user,setuser] = useState([])
    async function Data(){
   const {Data} = (axios.get("https://fakestoreapi.com/products")) 
   console.log(Data)
}


useEffect(() =>{
Data()

}, [])

    return(
        <h1>user</h1>
)
}
export default Application