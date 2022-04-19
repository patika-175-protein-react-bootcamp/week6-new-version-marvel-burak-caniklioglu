import React from 'react'
import { useLocation } from 'react-router-dom'

function Details() {
    const location = useLocation();
    const item = location.state.item;
    console.log(item);
  return (
    <div>Details</div>
  )
}

export default Details