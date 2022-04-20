import React from 'react'
import Cards from '../components/Cards'
import Searchbar from '../components/Searchbar'
import Pagination from '../components/Pagination'
import '../styles/Main.css'

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