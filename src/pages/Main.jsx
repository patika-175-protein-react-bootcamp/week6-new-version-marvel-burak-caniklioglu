import React from 'react'
import Cards from '../components/Cards'
import Searchbar from '../components/Searchbar'
import Pagination from '../constants/Pagination'

function Main() {
  return (
    <div>
        <Searchbar />        
        <Cards />
        <Pagination />
    </div>
  )
}

export default Main