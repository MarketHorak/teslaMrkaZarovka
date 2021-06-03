import { render } from 'react-dom';
import './style.css';
import React, { useState } from 'react';
import Bulb from './Bulb';
import obrazek from './img/images1.gif'
{/* <img src={obrazek} /> */}
/*  import img from '<img src="../img/images1.gif" alt=" "/>' 
 */

const App = () => (
  <div className="container">
    <header>
      {/* <div className="logo"></div> */}
    {/*   <div className="gif" ></div>  */}
    <img src={obrazek} />
      <h1>Toto je reakti zarovka od Tesly</h1>
    </header>
    <main>
   
  <Bulb/>
 
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);

render(<App />, document.querySelector('#app'));
