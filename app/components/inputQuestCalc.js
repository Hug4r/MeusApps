import React from 'react'

export default function Inputs_Calc2() {
  return (
    <div className='flex flex-col justify-end items-center'>
      <div className='flex flex-col space-y-5'>
            <input type='number' className='w-[200px] h-[50px] text-black text-xl text-center rounded-md border-x-4 border-y-4 border-red-500 placeholder:text-xl placeholder:text-center' placeholder='Digite um número'/>
            <input type='number' className='w-[200px] h-[50px] text-black text-xl text-center rounded-md border-x-4 border-y-4 border-red-500 placeholder:text-xl placeholder:text-center' placeholder='Digite um número'/>
      </div>
    </div>
  )
}