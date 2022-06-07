import React from 'react';
import { useState, useEffect } from 'react' ;
import Fuse from 'fuse.js';
import states  from '../states.json'


const options = {
    keys: [
        'state',
        'code',
    ]
  };
  
  const fuse = new Fuse(states, options);

const App = () => {
const[query, setQuery] = useState('');
const[resultList, setResultList] = useState('[]');

console.log({ resultList });

useEffect(() => {

    setResultList(fuse.search(query));

 }, [query]);
 


    return(
        <div className="dropdown is-active">
            <div className="dropdown-trigger">
                <input
                value={query}
                onChange={({target})=> setQuery(target.value)} 
                className="input"
                type="text"
                placeholder="SEARCH STATE ..."/>
        </div>
    <div 
        className="dropdown-menu" 
        id="dropdown-menu" 
        role="menu">
        <div className="dropdown-content">
        <a 
        className="dropdown-item is-active">
      </a>
            
        </div>
    </div>
</div>
)
};

export default App;