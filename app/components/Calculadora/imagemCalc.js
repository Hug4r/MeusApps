import React from 'react'
import Image from 'next/image'

export default function ImagemCalc() {
  return (
    <div className='pt-10'>
        <Image className='flex items-center justify-center'
            src="/calc.png"
            alt='Calculadora'
            width={100}
            height={100}
        ></Image>
    </div>
  )
}
