import React from 'react'
import HeaderCalc from '../components/Calculadora/headerCalc'
import ImagemCalc from '../components/Calculadora/imagemCalc'
import Inputs_Calc from '../components/Calculadora/inputResulCalc'
import Inputs_Calc2 from '../components/Calculadora/inputQuestCalc'
import Botoes from '../components/Calculadora/botoes'
//http://localhost:3000/calculadora

export default function Calculos() {
  return (
    <div className='flex flex-col justify-center items-center'>
     <HeaderCalc/>
     <ImagemCalc/>
     <Inputs_Calc/>
     <Botoes/>
     <Inputs_Calc2/>
    </div>
  )
}
