import React from 'react'
import Inputs_Calc from '../components/inputResulCalc'
import Inputs_Calc2 from '../components/inputQuestCalc'
import HeaderCalc from '../components/headerCalc'
import ImagemCalc from '../components/imagemCalc'
//http://localhost:3000/calculadora

export default function Calculos() {
  return (
    <div>
      <HeaderCalc/>
      <ImagemCalc/>
      <Inputs_Calc/>
      <Inputs_Calc2/>
    </div>
  )
}
