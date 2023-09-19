import React from 'react'
import PlayerCardComponent from '../card/PlayerCardComponent'

function PlayersComponent() {
  
  return (
    <div>
  <PlayerCardComponent playerName="blabal" playerClass="boxBlue"/>
  <PlayerCardComponent playerName="blabal" playerClass="boxGreen"/>
    </div>
  )
}

export default PlayersComponent