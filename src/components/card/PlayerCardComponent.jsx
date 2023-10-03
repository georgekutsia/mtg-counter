import React, { useContext, useEffect, useState } from 'react';
import AditionalCountersComponent from '../aditionalCounters/AditionalCountersComponent';
import { GlobalData } from '../../App';

function PlayerCardComponent({ playerName, playerColor, playerClass, playerImg, playersLife }) {
  const { playerLife, setPlayerLife } = useContext(GlobalData);

  const [rotationAngle, setRotationAngle] = useState(0);
  const [count, setcount] = useState(0);
  const [countColor, setCountColor] = useState('white');
  const [poison, setPoison] = useState(0);
  const [dead, setDead] = useState(false);
  const [showPoison, setShowPoison] = useState(false);
  const [temporalCount, setTemporalCount] = useState(null);
  const [resetTimer, setResetTimer] = useState(null); 

  useEffect(() => {
    setcount(playerLife);
  }, [playerLife]);

  const handlePoisonAdd = () => {
    setPoison(poison + 1);
    if (poison >= 9) {
      setPoison(10);
      setDead(true);
    } else {
      setDead(false);
    }
  };

  const handlePoisonRest = () => {
    setPoison(poison - 1);
    if (poison <= 0) {
      setPoison(0);
    }
    if (poison <= 10) {
      setDead(false);
    }
  };

  const handleOperate = (counter, color) => {
    setcount(count + counter);
    setTemporalCount(temporalCount + counter);
    setCountColor(color);

    if (resetTimer) {
      clearTimeout(resetTimer);
    }
    const timer = setTimeout(() => {
      setTemporalCount(null);
      setCountColor('white');
    }, 2000);

    setResetTimer(timer);
  };

  const rotateImage = () => {
    setRotationAngle(rotationAngle + 90);
  };

  return (
    <div className={`playersBox ${playerClass}`} style={{ transform: `rotate(${rotationAngle}deg)` }}>
      <div className='playersBox-name'>
        <img className='playersBox-name-img' src={playerImg} alt="Player" />
        <h1 className='playersBox-name-title'>{playerName}</h1>
        <div className='playersBox-name-rotate'>
          <i onClick={rotateImage} className="fa-solid fa-rotate-right"></i>
        </div>
      </div>
      {!dead &&
        <div className='playersBox-counter'>
          <div className='playersBox-counter-add'>
            <i onClick={() => handleOperate(1, "lightgreen")} className="fa-solid fa-plus"><span> 1</span></i>
            <i onClick={() => handleOperate(5, "lightgreen")} className="fa-solid fa-plus"><span> 5</span></i>
          </div>
          <div className='playersBox-counter-center'>
            <p>{count}</p>
            <h4 style={{ color: countColor }}>{temporalCount}</h4>
          </div>
          <div className='playersBox-counter-add'>
            <i onClick={() => handleOperate(-1, "tomato")} className="fa-solid fa-minus"><span> 1</span></i>
            <i onClick={() => handleOperate(-5, "tomato")} className="fa-solid fa-minus"><span> 5</span></i>
          </div>
        </div>
      }
      {dead &&
        <div>
          <i className="fa-solid fa-face-dizzy player-dead"></i>
        </div>
      }
      <div className='playersBox-aditional'>
        <div>
          <AditionalCountersComponent showPoison={showPoison} handlePoisonAdd={handlePoisonAdd} poison={poison} setShowPoison={setShowPoison} handlePoisonRest={handlePoisonRest} />
        </div>
      </div>
    </div>
  );
}

export default PlayerCardComponent;
