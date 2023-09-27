import React, { useEffect, useState } from 'react'
import AditionalCountersComponent from '../aditionalCounters/AditionalCountersComponent';

function PlayerCardComponent({playerName, playerColor, playerClass, playerImg, playersLife}) {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [count, setcount] = useState(playersLife)
  const [poison, setPoison] = useState(0)
  const [dead, setDead] = useState(false)
  const [showPoison, setShowPoison] = useState(false)
  

  useEffect(() => {
setcount(playersLife)

  }, [playersLife])
  

  const handlePoisonAdd = ()=>{
    setPoison(poison +1)
    if(poison >= 9){
      setPoison(10)
        setDead(true)
    } else{
      setDead(false)
    }
  }
  const handlePoisonRest = ()=>{
    setPoison(poison - 1)
    if(poison <= 0){
      setPoison(0)
    }
    if(poison <= 10){
      setDead(false)
    }
  }

  const rotateImage = () => {
    setRotationAngle(rotationAngle + 90);
  };

  return (
    <div className={`playersBox ${playerClass}`}  style={{ transform: `rotate(${rotationAngle}deg)` }}>
        <div className='playersBox-name'>
            <img className='playersBox-name-img' src={playerImg} alt="Player"  />
            <h1 className='playersBox-name-title'>{playerName}</h1>
        <div className='playersBox-name-rotate'>
          <i onClick={rotateImage} className="fa-solid fa-rotate-right"></i>
        </div>
        </div>
    {!dead &&
        <div className='playersBox-counter'>
            <div className='playersBox-counter-add'>
                    <i onClick={()=>setcount(count + 1)} className="fa-solid fa-plus"><span> 1</span></i>
                    <i onClick={()=>setcount(count + 5)} className="fa-solid fa-plus"><span> 5</span></i>
            </div>
            <div className='playersBox-counter-center'>
                <p>{count}</p>
            </div>
            <div className='playersBox-counter-add'>
                    <i onClick={()=>setcount(count - 1)}  className="fa-solid fa-minus"><span> 1</span></i>
                    <i onClick={()=>setcount(count - 5)}  className="fa-solid fa-minus"><span> 5</span></i>
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
        <AditionalCountersComponent showPoison = {showPoison} handlePoisonAdd={handlePoisonAdd} poison={poison} setShowPoison={setShowPoison} handlePoisonRest={handlePoisonRest}/>
          </div>
        </div>
    </div>
  )
}

export default PlayerCardComponent