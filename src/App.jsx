// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import React from 'react'
// import './App.css'
// import Watches from './components/Watches'
// import Myrouter from './Components_router/Router'


import Application from "./Component/Api_react"

// import {useState} from "react";
// import Secondcomponent from "./ComponentsUsecontext/Secondcolor";
// import { Colorcontext} from './ComponentsUsecontext/Firstcolor';

    
const App=()=> {
  // const [color, setcolor]=useState("simple")

  //   const handlebutton=()=>{
  //       setcolor((prev)=>prev ==='simple'? 'white':'black')
  //   }

  return (
    
    // <div className='container'>
    //   <Watches />
    // </div>
    // <Myrouter />
    <Application />

    // <Colorcontext.Provider value={{color, setcolor}}>
    // <button onClick={handlebutton}>Click me</button>
    // <Secondcomponent />
    // </Colorcontext.Provider>
)
}

export default App