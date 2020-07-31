import React, { useState, useEffect } from "react";
import { TweenLite, Power2 } from "gsap";
import NavBar from "../components/sidebar/navbar";
import "./main.style.css";

var i = 0;

export default function Main() {
  const [state, setState] = useState({
    txt: "Hi. My name is Chibuzo Madumere",
    speed: 1000,
    typing: ""
  });

  useEffect(() => {
    
  });

  function typeWriter() {
    
    if (i < state.txt.length) {
        
      setState(prevState =>({ ...prevState, typing : prevState.typing.splice(state.txt.length, 0, state.txt.charAt(i)) }))
      console.log('type', i)
      i++;
      setTimeout(typeWriter, state.speed);
    }
  }

  return (
    <div>
      <NavBar />
      <div className="main-section">
          <button onClick={typeWriter}>test</button>
        <h2 id="demo" className="name-title">{state.typing}</h2>
      </div>
    </div>
  );
}
