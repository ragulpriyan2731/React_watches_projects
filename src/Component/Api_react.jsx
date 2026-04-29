import axios from 'axios'
import { useEffect, useState } from 'react'


const Application =()=>{
    const [user,setuser] = useState([])

useEffect(() =>{
    async function fetchData(){
    try{
     const response = await axios.get("https://dummy-json.mock.beeceptor.com/companies")
         setuser (response.data)
     }catch (error) {
        console.error(error);
     }
}

    fetchData();

}, [])

    return(
        <div style={{backgroundColor: 'black',color:'white'}}>{user.map((item, id) => (
           
        <div style={{border: "1px solid red"}}>
        <h1 style={{color: 'white'}}key={id}>{item?.name} </h1>
        <h2 style={{color: 'whitesmoke'}}>{item?.country}</h2>
        <h3>{item?.industry}</h3>
        <h4>{item?.ceoName}</h4>
        <p>{item?.address}</p>
        </div>
    ))}</div>
)
}
export default Application