import React from 'react'
import Child from './liftingStateUp/Child'

const App = () => {
  
  const getData=(data)=>{
    console.log('data is :', data)
  }
  return (
    <>
      <Child getData = {getData}/>
    </>
  )
}

export default App















// useContext App.js file

// import { createContext, useContext, useState } from 'react';
// import './App.css';
// import ChildA from './useContext/ChildA';


//  const NameContext = createContext()
//  const SurnameContext = createContext()
// function App() {
//   const [name,setName] = useState('Devanand')
//   const [surname,setSurname] = useState('Verma')

//   return (
//     <NameContext.Provider value={name}>
//         <SurnameContext.Provider value={surname}>
//           <ChildA />
//         </SurnameContext.Provider>
//     </NameContext.Provider>
//   );
// }

// export default App;
// export {NameContext,SurnameContext}