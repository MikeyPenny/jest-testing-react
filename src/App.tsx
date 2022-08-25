import React, { useState } from 'react';

import './App.css';

export const replaceCamelWithSpaces = (colorName: string) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {

  const [color, setColor] = useState('red');
  const [isDisabled, setIsDisabled] = useState(false);

  const changeColorHandler = (ev: React.MouseEvent) => {
    ev.preventDefault();
    if (color === 'red') {
      setColor('blue');
    }

    if (color === 'blue') {
      setColor('red');
    }
    
  }
  
  return (
    <div>
      <button 
        style={{backgroundColor: isDisabled ? 'gray' : color}}
        disabled={isDisabled}
        onClick={changeColorHandler} >
          Change to {color === 'red' ? 'blue' : 'red'}
      </button>
      <input type="checkbox" onChange={(ev) => setIsDisabled(ev.target.checked)} />
    </div>
  );
}

export default App;
