import React from 'react'
import Image from 'next/image'

export default function ImagemCalc() {
  return (
    <div>
        <Image className='flex items-center justify-center'
            src="/calc.png"
            alt='Calculadora'
            width={10}
            height={10}
        ></Image>
    </div>
  )
}
