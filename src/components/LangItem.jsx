import React from 'react'

function LangItem({ item, isLang, setIsLang }) {
    console.log(isLang);
  return (
    <button className={isLang === item ? "lang activated" : "lang"} value={item} onClick={() => setIsLang(item)}>
        {item}
    </button>
  )
}

export default LangItem