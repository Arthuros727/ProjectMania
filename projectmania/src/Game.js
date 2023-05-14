import './styles.css';
import hitsound from "./drum-hitclap.wav";
import note from "./p.png";
import round from "./down.png";
import roundAfter from "./downAfter.png";
import { useEffect, useState } from 'react';
import { createElement } from 'react';
import React from "react";

function Entity() {
  return <div className='entity'> <img src={note}></img></div>;
}

function Entity1() {
  return <div className='entity1'> <img src={note}></img></div>;
}

function Entity2() {
  return <div className='entity2'> <img src={note}></img></div>;
}

function Entity3() {
  return <div className='entity3'> <img src={note}></img></div>;
}

export default function Game() {
 
  let i = 0;
  let j = 0;
  let k = 0;
  let l = 0;
  let seconde = 0;

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

  const audio = new Audio(hitsound);
  let played1 = false;
  let played2 = false;
  let played3 = false;
  let played4 = false;

  const setcolor = () => {
    if (i === 1) {
      document.getElementsByClassName("box")[0].querySelector('img').src = roundAfter;

      if (!played1) {
        audio.currentTime = 0;
        audio.play();
        played1 = true;
      }
    } else {
      document.getElementsByClassName("box")[0].querySelector('img').src = round;

      played1 = false;
    }

    if (j === 1) {
      document.getElementsByClassName("box")[1].querySelector('img').src = roundAfter;
      if (!played2) {
        audio.currentTime = 0;
        audio.play();
        played2 = true;
      }
    } else {
      document.getElementsByClassName("box")[1].querySelector('img').src = round;

      played2 = false;
    }

    if (k === 1) {
      document.getElementsByClassName("box")[2].querySelector('img').src = roundAfter;

      if (!played3) {
        audio.currentTime = 0;
        audio.play();
        played3 = true;
      }
    } else {
      document.getElementsByClassName("box")[2].querySelector('img').src = round;

      played3 = false;
    }

    if (l === 1) {
      document.getElementsByClassName("box")[3].querySelector('img').src = roundAfter;
      if (!played4) {
        audio.currentTime = 0;
        audio.play();
        played4 = true;
      }
    } else {
      document.getElementsByClassName("box")[3].querySelector('img').src = round;
      played4 = false;
    }
  };

  // const addEntity = () => {
  //   setEntities(prevEntities => {
  //     if (prevEntities.length < 3) {
  //       return [...prevEntities, <Entity key={prevEntities.length} />];
  //     }
  //     return prevEntities;
  //   });
  // };
  const [showEntities, setShowEntities] = useState([]);
  const [showEntities1, setShowEntities1] = useState([]);
  const [showEntities2, setShowEntities2] = useState([]);
  const [showEntities3, setShowEntities3] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      seconde++;
      console.log(seconde);

      if (seconde === 200 || seconde === 210 || seconde === 310 ||seconde == 600) {
        // setShowEntities(true);
        const entityElementss = document.querySelectorAll(".entity");
        entityElementss.forEach((element) => {
          element.style.display = "block";
        });
        setShowEntities((prevEntities) => [...prevEntities, <Entity key={prevEntities.length} />]);
       
      }else{
        const entityElements = document.querySelectorAll(".entity");

        entityElements.forEach((element) => {
          setTimeout(() => {
            // Code à exécuter après l'attente
            element.style.display = "none";
            return;
          }, 1500);
        });
      }

      if (seconde === 560 || seconde === 270 ) {
        // setShowEntities(true);
        const entityElementss = document.querySelectorAll(".entity1");
        entityElementss.forEach((element) => {
          element.style.display = "block";
        });
        setShowEntities1((prevEntities) => [...prevEntities, <Entity key={prevEntities.length} />]);
       
      }else{
        const entityElements1 = document.querySelectorAll(".entity1");

        entityElements1.forEach((element) => {
          setTimeout(() => {
            // Code à exécuter après l'attente
            element.style.display = "none";
            return;
          }, 1500);
        });
      }

      if (seconde === 340 || seconde === 700 || seconde === 120 ||seconde == 600) {
        // setShowEntities(true);
        const entityElementss = document.querySelectorAll(".entity2");
        entityElementss.forEach((element) => {
          element.style.display = "block";
        });
        setShowEntities2((prevEntities) => [...prevEntities, <Entity key={prevEntities.length} />]);
       
      }else{
        const entityElements2 = document.querySelectorAll(".entity2");

        entityElements2.forEach((element) => {
          setTimeout(() => {
            // Code à exécuter après l'attente
            element.style.display = "none";
            return;
          }, 1500);
        });
      }


      if (seconde === 210 || seconde === 250 || seconde === 260 ||seconde == 280) {
        // setShowEntities(true);
        const entityElementss = document.querySelectorAll(".entity3");
        entityElementss.forEach((element) => {
          element.style.display = "block";
        });
        setShowEntities3((prevEntities) => [...prevEntities, <Entity key={prevEntities.length} />]);
       
      }else{
        const entityElements3 = document.querySelectorAll(".entity3");

        entityElements3.forEach((element) => {
          setTimeout(() => {
            // Code à exécuter après l'attente
            element.style.display = "none";
            return;
          }, 1500);
        });
      }
      

      const entityElement = document.getElementsByClassName("entity")[0];
     

      
        
        const offsets = entityElement.getBoundingClientRect();
        const top = offsets.top;

        if (top > 1200) {
          entityElement.style.display = "none";
        }
      
    }, 10);

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="container">
      <div className="ok">
        <div className="row1">
        <Entity />
            {/* <Entity />
        <Entity />
            <Entity /> */}
            {showEntities.map((entity) => entity)}
         
          <div className="box">
            <img src={round} alt="" />
          </div>
        </div>
        <div className="row2">
        <Entity1 />
        {showEntities1.map((entity1) => entity1)}
          <div className="box">
            <img src={round} alt="" />
          </div>
        </div>
        <div className="row3">
        <Entity2 />
        {showEntities2.map((entity2) => entity2)}
          <div className="box">
            <img src={round} alt="" />
          </div>
        </div>
        <div className="row4">
        <Entity3 />
        {showEntities3.map((entity3) => entity3)}
          <div className="box">
            <img src={round} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
