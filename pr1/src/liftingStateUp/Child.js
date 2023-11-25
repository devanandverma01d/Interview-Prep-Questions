import React,{useState} from 'react'

const Child = ({getData}) => {
    const [data,setData] = useState('Devanand Verma')

    getData(data)
  return (
    <>
        
    </>
  )
}

export default Child