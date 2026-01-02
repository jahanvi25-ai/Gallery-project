import React from 'react'

const Gallery = ({getdata,index,setIndex}) => {
  return (
    <div>
        <div className='flex flex-wrap bg-black h-screen -z-30 gap-5  '>
        <h1 className=' absolute bottom-1/2 left-[42%] text-emerald-950 font-serif italic tracking-widest text-6xl'>Gallery</h1>
      {getdata.map((elem, idx)=>{
         

         return <div key={idx} className=' my-2 gap-5 left-20 flex relative w-64 h-72 justify-between rounded-2xl '>
         <img src={elem.download_url} loading='lazy' alt=" picture" className=' transition-opacity duration-500 w-full h-[90%] rounded object-cover overflow-hidden absolute' />
          <h3 className='absolute bottom-0.5 text-xl font-bold text-white px-5 }'onLoad={(e)=>e.target.classlist.add('opacity-100')} >{elem.author}</h3>
         </div>
      })
      
      
      }
      <div className='  flex fixed gap-5 justify-center bottom-0.5 w-screen h-1/18  '>
      <button onClick={()=>{
        if(index>1){
         setIndex(index-1)}
      }} className='py-2 px-8 font-bold bg-amber-400 text-black active:scale-[0.96] transition-transform  rounded  left-40vw' > 
         Prev</button>
      <button onClick={()=>{
        setIndex(index+1)}}
         className=' px-8 py-2 font-bold bg-amber-400 text-black active:scale-[0.96] rounded ' > Next</button>
      </div>
      </div>
    </div>
  )
}

export default Gallery