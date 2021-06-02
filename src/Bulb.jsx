import React, { useState } from 'react';
/* import './style.css'; */
/* import  bulb-off from ('src/img/bulb-off.png'); 
 */

const Bulb = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <>
    <button
     /*  className={ isOn ? "btn--on" : "btn"} */
      onClick={() => setIsOn(!isOn)}
    >
      Ted chci {isOn? "Vypnout" : "Zapnout"}
    </button>
    
   { <img src={"bulb-"+(isOn ? "on" : "off")+".png"}
   className={ isOn ? "btn--on" : "btn"}></img> }
    </>
  );
};

export default Bulb;