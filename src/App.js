import React, { useEffect, useState } from "react";
import NavbarCenterComponent from "./components/navbar/NavbarCenterComponent";
import PlayersComponent from "./components/player/PlayersComponent";
export const GlobalData = React.createContext();

function App() {
  const [playerLife, setPlayerLife] = useState(40);
  
  return (
    <GlobalData.Provider value={{playerLife, setPlayerLife}}>
      <div className="app">
        <PlayersComponent />
        <NavbarCenterComponent />
      </div>
    </GlobalData.Provider>
  );
}

export default App;
