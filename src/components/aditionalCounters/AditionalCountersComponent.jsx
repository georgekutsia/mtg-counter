import React from 'react'

function AditionalCountersComponent({showPoison, handlePoisonAdd, poison, setShowPoison, handlePoisonRest}) {
  return (
    <div className='playersBox-aditional-poison'>
              {showPoison && <i onClick={handlePoisonAdd}  className="fa-solid fa-plus"><span></span></i>}
              {poison === 0 &&<i onClick={()=>setShowPoison(!showPoison)}  className="fa-solid fa-skull-crossbones"></i>}
              {showPoison && poison >=1 && <i  className="fa-solid fa">{poison}</i>}
              {showPoison && <i onClick={handlePoisonRest}  className="fa-solid fa-minus"><span></span></i>}
    </div>
  )
}

export default AditionalCountersComponent