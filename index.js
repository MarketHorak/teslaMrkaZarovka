'use strict';

console.log('funguju!');

import React, { useState } from 'react';

export const LightSwitch = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <button
      className="btn"
      onClick={() => setIsOn(isOn === true ? 'btn btn--on' : 'btn')
  }
    >
      Zhasnout
    </button>
  );
};
/* const LightSwitch = (event)  => {
  //  const bulb = document.querySelector(".bulb")
 
    event.target.classList.toggle('bulb bulb⁠-⁠-⁠on');
      };
      
      const btnElm = document.querySelector('.btn')
      btnElm = addEventListener('click', LightSwitch); */
     
      document.querySelector('.btn').addEventListener('click', () => {
        const btn = document.querySelector('.bulb');
        btn.classList.toggle('bulb-bulb⁠-⁠-⁠on');
      }); 