import React from 'react';
import { useState, useEffect } from 'react' ;
import Fuse from 'fuse.js';
import states  from '../states.json';
import classnames from 'classnames';


const options = {
    keys: [
        'state',
        'code',
    ]
  };
  
  const fuse = new Fuse(states, options);

const App = () => {
const[query, setQuery] = useState('');
const[resultList, setResultList] = useState([]);
const[selected, setSelected] = useState(0);
console.log(selected);

const onSelect = (event) => {
const {key} = event;

if (key === 'ArrowUp'){
    const newSelected = selected -1;

if(newSelected < 0){
return;
}

    setSelected(newSelected)
}

if (key === 'ArrowDown'){
    const newSelected = selected +1;

    if(newSelected > resultList.length - 1){
        return;
    }

    setSelected(newSelected)
}


};

console.log({ resultList });

useEffect(() => {
    setResultList(fuse
        .search(query)
        .slice(0, 8)
        );
        

 }, [query]);
 


    return(
        <div className="dropdown is-active">
            <div className="dropdown-trigger">
                <input
                value={query}
                onChange={({target})=> setQuery(target.value)} 
                className="input"
                type="text"
                placeholder="SEARCH STATE ..."
                onKeyUp={onSelect}
                />
        </div>
    <div 
        className="dropdown-menu" 
        id="dropdown-menu" 
        role="menu">
        <div className="dropdown-content">
            {resultList.map((
            { item: {state, code} }, 
            index,
            )=> {
                return(
                    <a 
                    key = {code}
                    className={classnames("dropdown-item", {
                        'is-active': selected === index
                    })}
                    onMouseEnter={() => setSelected(index)}

                    >
                 {state}
                  </a>
                );
            })} 
        </div>
    </div>
</div>
)
};

export default App;