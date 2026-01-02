import React, { useEffect, useEffectEvent } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Gallery from './components/Gallery'
const App = () => {
const [getdata, setData] = useState([])
const [index, setIndex] = useState(1)
const [loading, setloading] = useState(false)

  const getData= async (index)=>{
    setloading(true)
const response=  await axios.get( `https://picsum.photos/v2/list?page=${index}&limit=10`)
setData(response.data)
setloading(false)
  }

useEffect(function(){
   getData(index)
},[index])
  
  
  return (
    <div>
      
    <Gallery getdata={getdata}
    index={index}
    setIndex={setIndex}/>
    </div>
  )
}

export default App