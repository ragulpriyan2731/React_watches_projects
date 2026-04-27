//  const toggle = () =>{
//     setValue((prev) => !prev )
//    }

import UseCustomhook from "../context/useCustomhook";


function HandlePassword(){
    const [showPassword, togglePassword] = UseCustomhook(false)

    console.log("Show-", showPassword)
    return(
       <>
        <h2>Handle Password</h2>
        <input type={showPassword ? "text" : "password"} placeholder="Enter your password"/>
         {/* type = text, password, email, number */}

        <button onClick={togglePassword}> {showPassword ? "Hide" : "Show"} </button>
       </> 

    )
}

export default HandlePassword;
import { useState } from "react";

function UseCustomhook(){
   const [value, setValue] = useState(false);

   const toggle = () =>{
       console.log("hi")
       setValue((prev) => !prev )
    }
    
    console.log(value, "--value")
   return [value, toggle]

}

export default UseCustomhook;