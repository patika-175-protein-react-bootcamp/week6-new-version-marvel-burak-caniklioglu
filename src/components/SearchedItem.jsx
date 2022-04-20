import React from 'react'
import { useCharacter } from '../contexts/context'

function SearchedItem({ item, character }) {
  const { moreClick } = useCharacter();
    console.log(item);
  return (
    <div onClick={() => moreClick(item)}>
      {character 
      ? <>Karakter Adı: {item.name}</>
      : <>{item.name}</>
      }
    </div>
  )
}

export default SearchedItem