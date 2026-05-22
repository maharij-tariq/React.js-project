import React, { useState } from 'react'
const Counter = () => {
  const[number,setNumber] = useState(0)
    
const nextNumber = () =>{
  setNumber(number + 1)
}
const prevNumber = () =>{
  if(number === 0){
    setNumber(0)
  }else{
    setNumber(number -1)
}
}
const ResetNumber = () =>{
  setNumber(0)
}
  return (
    <div  className=' p-20 gap-3 bg-purple-300  rounded-4xl  flex flex-col  items-center text-center'>
        <button className='bg-yellow-400 p-4 w-[80px] border border-amber-500 rounded-2xl outline-none text-xl w-5 **:'>{number}</button>
        <div className='flex gap-4 outline-none border border-none'>
        <button className='bg-yellow-400 p-3 w-[80px] border border-amber-500 text-xl w-5 rounded-2xl outline-none cursor-pointer active:scale-105'
        onClick={prevNumber}
        >Prev</button>
        <button className='bg-yellow-400 p-3 w-[80px] border border-amber-500 text-xl w-5 rounded-2xl outline-none cursor-pointer active:scale-105'
      onClick={nextNumber}
        >Next</button>
        </div>
    
        <button className=' bg-red-500 hover:bg-red-700 p-3 w-[80px] text-xl w-5 text-white rounded-2xl outline-none cursor-pointer active:scale-105'
        onClick={ResetNumber}
        >Reset </button>
      
    </div>
  )
}

export default Counter

