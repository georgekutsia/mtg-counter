import React, { useContext } from 'react'
import PlayerCardComponent from '../card/PlayerCardComponent'
import {GlobalData} from "../../App"


function PlayersComponent() {
  const {playerLife} = useContext(GlobalData)
  return (
    <div className='players-box'>
  <PlayerCardComponent playerName="Daniel" playerClass="boxBlue" playerImg="https://res.cloudinary.com/dxnzcewsy/image/upload/v1690844391/portfolio/oscaryoliver/familia/daniel_rvaqd2.jpg"/>
  <PlayerCardComponent playerName="Marcel" playerClass="boxGreen" playerImg="https://res.cloudinary.com/dxnzcewsy/image/upload/v1695121615/portfolio/oscaryoliver/familia/marcel1_g8vjb3.jpg"/>
    </div>
  )
}

export default PlayersComponent