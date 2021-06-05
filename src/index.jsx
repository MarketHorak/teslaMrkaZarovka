import { render } from 'react-dom';
import './style.css';
import React, { useState } from 'react';

/* import obrazek from './img/images1.gif' */
import obrazek1 from './img/godel.png'
import ruzova2 from  './img/ruzova2.svg'
import Hra from './Hra/hra'




const App = () => (
/*   return ( */
  <div className="container">
    <header>
    <img src={obrazek1} className="kurt" />
 {/*    <img src={obrazek} /> */}
      <h1>ZKOUŠKOVA HRA
        
        UTRHCISLO
      </h1>
    </header>
    <main>
    <img src={ruzova2} className="bounce-in-top" />

  <Hra />
    </main>
    <footer>
     
    </footer>
  </div>
  );

render(<App />, document.querySelector('#app'));
