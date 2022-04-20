import React, { useState } from 'react'
import LangItem from './LangItem'

function Langs() {
  const [isLang,setIsLang] = useState('TR')
  const lang = [ 'FR', 'EN', 'TR' ]
  return (
    <div className='langs'>
      {
        lang.map((item, index) => {
          return (
            <>
              <LangItem key={index} item = {item} isLang={isLang} setIsLang={setIsLang}/>
            </>
          )
        })
      }
    </div>
  )
}

export default Langs