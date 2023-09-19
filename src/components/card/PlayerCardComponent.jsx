import React, { useState } from 'react'

function PlayerCardComponent({playerName, playerColor, playerClass}) {
  const [rotationAngle, setRotationAngle] = useState(0);

  const [count, setcount] = useState(40)
  
  const rotateImage = () => {
    setRotationAngle(rotationAngle + 90);
  };

  return (
    <div className={`playersBox ${playerClass}`}  style={{ transform: `rotate(${rotationAngle}deg)` }}>
        <div className='playersBox-name'>
            <img className='playersBox-name-img' src="https://res.cloudinary.com/dxnzcewsy/image/upload/v1690844391/portfolio/oscaryoliver/familia/daniel_rvaqd2.jpg" alt="Player"  />
            <h1 className='playersBox-name-title'>{playerName}</h1>
        <div className='playersBox-name-rotate'>
          <i onClick={rotateImage} className="fa-solid fa-rotate-right"></i>
        </div>
        </div>
        <div className='playersBox-counter'>
            <div className='playersBox-counter-add'>
                    <i onClick={()=>setcount(count + 1)} className="fa-solid fa-plus"><span>1</span></i>
                    <i onClick={()=>setcount(count + 5)} className="fa-solid fa-plus"><span>5</span></i>
            </div>
            <div className='playersBox-counter-center'>
                <p>{count}</p>
            </div>
            <div className='playersBox-counter-add'>
                    <i onClick={()=>setcount(count - 1)}  className="fa-solid fa-minus"><span>1</span></i>
                    <i onClick={()=>setcount(count - 5)}  className="fa-solid fa-minus"><span>5</span></i>
            </div>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default PlayerCardComponent