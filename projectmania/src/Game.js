import './styles.css';
import hitsound from "./drum-hitclap.wav";
import { useEffect } from 'react';

export default function Game() {
  let u = 0;
  let i = 0;
  let j = 0;
  let k = 0;
  let l = 0;

  const handleKeyDown = (ev) => {
    if (ev.keyCode === 83) {
      i = 1;
      setcolor();
    }

    if (ev.keyCode === 68) {
      j = 1;
      setcolor();
    }

    if (ev.keyCode === 75) {
      k = 1;
      setcolor();
    }

    if (ev.keyCode === 76) {
      l = 1;
      setcolor();
    }
  };

  const handleKeyUp = (ev) => {
    if (ev.keyCode === 83) {
      i = 0;
      setcolor();
    }
    if (ev.keyCode === 68) {
      j = 0;
      setcolor();
    }

    if (ev.keyCode === 75) {
      k = 0;
      setcolor();
    }

    if (ev.keyCode === 76) {
      l = 0;
      setcolor();
    }
  };

  const setcolor = () => {

    if (i === 1) {
      document.getElementsByClassName("box")[0].style.backgroundColor = "red";
      if (u == 0) {
        var audio = new Audio(hitsound);
        audio.play();
        u = 1;
      }
    } else {
      document.getElementsByClassName("box")[0].style.backgroundColor = "blue";
      u = 0;
    }

    if (j === 1) {
      document.getElementsByClassName("box")[1].style.backgroundColor = "red";
      if (u == 0) {
        var audio = new Audio(hitsound);
        audio.play();
        u = 1;
      }
    } else {
      document.getElementsByClassName("box")[1].style.backgroundColor = "blue";
      u = 0;
    }

    if (k === 1) {
      document.getElementsByClassName("box")[2].style.backgroundColor = "red";
      if (u == 0) {
        var audio = new Audio(hitsound);
        audio.play();
        u = 1;
      }
    } else {
      document.getElementsByClassName("box")[2].style.backgroundColor = "blue";
      u = 0;
    }
    if (l === 1) {
      document.getElementsByClassName("box")[3].style.backgroundColor = "red";
      if (u == 0) {
        var audio = new Audio(hitsound);
        audio.play();
        u = 1;
      }
    } else {
      document.getElementsByClassName("box")[3].style.backgroundColor = "blue";
      u = 0;
    }

  };

  window.onload = function () {

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
  };



  return (
    
    <div className="container">
      <div className="line-1"></div>
      <div className="ok">
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    </div>
  );
}
