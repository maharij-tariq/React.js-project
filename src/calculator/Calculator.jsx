import React, { useState } from 'react'

const Calculator = (e) => {
const [input, setinput] = useState('')
// button press
 const handlingClick = (value) =>{
     setinput(input + value)
 }
  const clearAll = () =>{
   setinput('');
  }
  const  deleteLast = () =>{
    setinput(input.slice(0,-1));
  }
 const calculator = () =>{
  try {
    setinput(eval(input).toString());
  } catch (error) {
    setinput(error);
  }
}

  return (
    <div className=' border border-cyan-100 outline-none rounded-4xl p-5 bg-blue-100 shadow-xl shadow-blue-500/100 '>
     <input className = 'bg-teal-400 w-full text-white text-2xl outline-none p-4  rounded-2xl -500 text-right mb-5' type="text"  placeholder='0'
     value={input}
     readOnly
     />
     <div>
            <button className = 'bg-amber-500 text-white' onClick={deleteLast}>DEL</button>
            <button className='bg-amber-500  text-white' onClick={clearAll}>AC</button>
            <button className='bg-teal-400  text-white' onClick={()=>{
              handlingClick('%')
            }}>%</button>
            <button className='bg-teal-400  text-white' onClick={()=>{
              handlingClick('/')
            }}>/</button>
        </div>
         <div> 
            <button className='bg-teal-400  text-white ' onClick={()=>{
              handlingClick('7')
            }}>7</button>
            <button className='bg-teal-400  text-white' onClick={()=>{
              handlingClick('8')}}>8</button>
            <button className='bg-teal-400  text-white' onClick={()=>{
              handlingClick('9')}}>9</button>
            <button className='bg-teal-400  text-white' onClick={()=>{
              handlingClick('*')
            }}>*</button>
        </div>
         <div>
            <button className='bg-teal-400  text-white' onClick={()=>{
              handlingClick('4')
            }} >4</button>
            <button className='bg-teal-400  text-white' onClick={()=>{
              handlingClick('5')
            }}>5</button>
            <button className='bg-teal-400  text-white' onClick={()=>{
              handlingClick('6')
            }}>6</button>
            <button className='bg-teal-400  text-white'  onClick={()=>{
              handlingClick('-')
            }}>-</button>
        </div>
         <div>
            <button className='bg-teal-400  text-white' onClick={()=>{
              handlingClick(1)
            }}>1</button>
            <button className='bg-teal-400  text-white' onClick={()=>{
            handlingClick('2')}
            }>2</button>
            <button className='bg-teal-400  text-white' onClick={()=>{
             handlingClick('3')
            }}>3</button>
            <button className='bg-teal-400  text-white' onClick={()=>{
              handlingClick('+')
            }}>+</button>
        </div>
         <div>
            <button className='bg-teal-400  text-white' onClick={()=>{
              handlingClick('00')
            }}>00</button>
            <button className='bg-teal-400  text-white' onClick={()=>{
              handlingClick('0')
            }}>0</button>
            <button  className='bg-teal-400  text-white' onClick={()=>{
              handlingClick('.')
            }}>.</button>
            <button className='bg-amber-500  text-white' onClick={calculator} >=</button>
        </div>
    </div>
  )
}

export default Calculator
