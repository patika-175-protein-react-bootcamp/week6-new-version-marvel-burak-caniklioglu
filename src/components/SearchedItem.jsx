import React from 'react'

function SearchedItem({ item }) {
    console.log(item);
  return (
    <div>
        {item.name}
    </div>
  )
}

export default SearchedItem