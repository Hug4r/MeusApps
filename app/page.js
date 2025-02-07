import React from 'react'
import { FaSignal } from "react-icons/fa";
import { MdBattery6Bar } from "react-icons/md";

export default function Page() {
  return (
    <div>
      <div>
        <header 
          className='relative flex justify-center items-center bg-green-400 w-full h-[50px]'>
          <span className="text-center text-black font-bold text-2xl">Meus Aplicativos</span>
          <div className='absolute right-4 flex justify-end items-center gap'>
            <FaSignal className='text-white font-bold text-2xl'/>
            <MdBattery6Bar className='text-black font-bold text-2xl'/>
          </div>
        </header>
      </div>
    </div>
  )
}

