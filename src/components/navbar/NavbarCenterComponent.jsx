import React, { useState } from 'react';

function NavbarCenterComponent() {
  const [showNav, setShowNav] = useState(false);

  const toggleDice20 = () => {
    setShowNav(!showNav);
  };

  return (
    <div className='navbarBox'>
    <i className="fa-solid fa-dice-d20 dice20" style={{ opacity: showNav ? 1 : 0, transform: showNav ? 'translateX(0)' : 'translateX(-160px)' }}></i>
    <i className="fa-solid fa-dice-d6 dice6" style={{ opacity: showNav ? 1 : 0, transform: showNav ? 'translateX(0)' : 'translateX(-160px)' }}></i>
      <i onClick={toggleDice20} className="fa-solid fa-hands-asl-interpreting"></i>
     <i className="fa-solid fa-users playersAmount" style={{ opacity: showNav ? 1 : 0, transform: showNav ? 'translateX(0)' : 'translateX(160px)' }}></i> 
    </div>
  );
}

export default NavbarCenterComponent;
