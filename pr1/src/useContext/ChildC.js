import React, { useContext } from 'react'
import { NameContext, SurnameContext } from '../App'

const ChildC = () => {
    const name1 = useContext(NameContext)
    const surname1 = useContext(SurnameContext)
  return (
    <>
        <h1>My name is {name1} {surname1}</h1>
    </>
  )
}

export default ChildC