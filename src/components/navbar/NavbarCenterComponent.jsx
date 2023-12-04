import React, { useContext, useState } from 'react';
import {GlobalData} from "../../App"

function NavbarCenterComponent() {
  const {setPlayerLife} = useContext(GlobalData)

  const [showNav, setShowNav] = useState(false);
  const [showResetLife, setShowResetLife] = useState(false);
  

  const toggleMenu = () => {
    setShowNav(!showNav);
  };


  const toggleResetLifeBack = async (startNumber) => {
    setPlayerLife(2);
    await new Promise((resolve) => setTimeout(resolve, 0));
    setPlayerLife(startNumber);
    await new Promise((resolve) => setTimeout(resolve, 200));
    setShowResetLife(false);
    await new Promise((resolve) => setTimeout(resolve, 200));
  
    setShowNav(false);
  };
  

  const toggleResetLife = () => {
    setShowResetLife(!showResetLife)
  }
  return (
    <div className='navbarBox'>
        <i className="fa-solid fa-dice-d20 dice20" style={{ opacity: showNav ? 1 : 0, transform: showNav ? 'translateX(0)' : 'translateX(-120px)' }}></i>
        <i className="fa-solid fa-dice-d6 dice6" style={{ opacity: showNav ? 1 : 0, transform: showNav ? 'translateX(0)' : 'translateX(-120px)' }}></i>
        <i className="fa-solid fa-hands-asl-interpreting" onClick={toggleMenu} ></i>
            <div>
                <i className="fa-solid  fa-2 resetLife20"  onClick={()=>toggleResetLifeBack(20)}   style={{ opacity: showResetLife ? 1 : 0, transform: showResetLife ? 'translateX(0)' : 'translateY(-50px)' }}>0</i> 
                <i className="fa-solid  fa-heart-pulse resetLife" onClick={toggleResetLife}  style={{ opacity: showNav ? 1 : 0, transform: showNav ? 'translateX(0)' : 'translateX(120px)' }}></i> 
                <i className="fa-solid  fa-4 resetLife40"  onClick={()=>toggleResetLifeBack(40)}   style={{ opacity: showResetLife ? 1 : 0, transform: showResetLife ? 'translateX(0)' : 'translateY(50px)' }}>0</i> 
            </div>
        <i className="fa-solid fa-users playersAmount" style={{ opacity: showNav ? 1 : 0, transform: showNav ? 'translateX(0)' : 'translateX(120px)' }}></i> 
    </div>
  );
}

export default NavbarCenterComponent;
