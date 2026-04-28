import { useContext } from "react";
import { Colorcontext } from "./Firstcolor"

const Secondcomponent=()=>{
    const {color} = useContext(Colorcontext)

    const textstyle ={
        backgroundColor: color ==='simple'? 'white':'black'
    
    }
    return(
        <h1 style={textstyle}>{color}</h1>
    )

}
export default Secondcomponent
