import React, { useState, useEffect, useRef } from "react";
import { TweenLite, Power2 } from 'gsap';
import "./navbar.style.css";

let myTween
let myElement
export default function NavBar() {

    useEffect(() =>{
        myTween = TweenLite.to(myElement, 1, {x: 100, y: 100});
    })

  const [screenSize, setScreenSize] = useState(window.screen.width)

  window.onresize = resize;

  function resize()
  {
    setScreenSize(window.screen.width)
  }
    
  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("mySidenav").style.animation = "pop 0.5s ";
    document.getElementById("mySidenav").style.animationDelay = "0.1s";
    document.getElementById("sidenavInner").style.animation = "padding 1s";
    document.getElementById("burgerMenu").style.marginLeft = "0%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("myOverlay").style.marginLeft = "0px";
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("mySidenav").style.animation = "none";
    document.getElementById("sidenavInner").style.animation = "none";
    document.getElementById("burgerMenu").style.marginLeft = "10%";
    
  }

  return (
    <header>
        <div useRef={div => myElement = div}/>
      <div id="mySidenav" className="sidenav">
        <div id="sidenavInner" className="sidenavinner">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div id="myOverlay" className="overlay" onClick={closeNav}></div>
      <span
        id="burgerMenu"
        style={{ fontSize: "60px", cursor: "pointer", height: "fit-content" }}
        onClick={openNav}
      >
        &#9776;
      </span>
    </header>
  );
}
