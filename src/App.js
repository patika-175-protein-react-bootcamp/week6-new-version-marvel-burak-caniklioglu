import React from 'react';
import './App.css';
import Cards from './components/Cards';
import Searchbar from './components/Searchbar';
import Marvel from './constants/Marvel';
import Pagination from './constants/Pagination';
import { CharacterProvider } from './contexts/context';
import  useWindowSize  from './hooks/useWindowSize';
import Router from './router/Router';


function App() {
  const [width, ] = useWindowSize();
  return (
    <div className="App">
      <CharacterProvider>
        <Marvel width = {width}/>
        <Router />
      </CharacterProvider>
    </div>
  );
}

export default App;