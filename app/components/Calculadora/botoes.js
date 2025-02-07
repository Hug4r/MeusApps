import React from 'react'

export default function Botoes() {
  return (
    <div className='flex pt-4 space-x-3'>
      <button className='w-[40px] h-[70px] bg-blue-500 rounded-md border-4 border-blue-200 text-xl font-bold text-white hover:bg-blue-950 hover:scale-125'>+</button>
      <button className='w-[40px] h-[70px] bg-blue-500 rounded-md border-4 border-blue-200 text-xl font-bold text-white hover:bg-blue-950 hover:scale-125'>-</button>
      <button className='w-[40px] h-[70px] bg-blue-500 rounded-md border-4 border-blue-200 text-xl font-bold text-white hover:bg-blue-950 hover:scale-125'>x</button>
      <button className='w-[40px] h-[70px] bg-blue-500 rounded-md border-4 border-blue-200 text-xl font-bold text-white hover:bg-blue-950 hover:scale-125'>/</button>
    </div>
  )
}
