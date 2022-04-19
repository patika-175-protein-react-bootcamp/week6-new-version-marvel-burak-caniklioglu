import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SearchedItem from './SearchedItem';

function Searchbar() {
    const [searched, setSearched] = useState([]);
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
        fetchData(e.target.value);
    }

    const fetchData = async (search) => {
        if(!search){
            setSearched([]);
            return;
        }

        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&apikey=75ff82aee4aef7e1bdb522eea36271d4`);
        console.log(res);
        if(res.statusText === 'OK'){
            setSearched(res.data.data.results);
        }
    }
    
    
    
  return (
    <div className='input-area'>
        <div className='input-container'>
            <input type="text" placeholder="Search"
            value={search}
            onChange = {handleChange} />
            <ul>
                {searched?.slice(0,5).map((item) => {
                    return <li key={item.id} ><SearchedItem item = {item}/></li>
                }
                )}
            </ul>
        </div>
        

    </div>
  )
}

export default Searchbar