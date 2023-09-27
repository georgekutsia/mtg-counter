import React, { useEffect, useState } from "react";
import NavbarCenterComponent from "./components/navbar/NavbarCenterComponent";
import PlayersComponent from "./components/player/PlayersComponent";
export const GlobalData = React.createContext();

function App() {
  const [playerLife, setPlayerLife] = useState();


  useEffect(() => {
    setPlayerLife(30)
  }, [playerLife])
  
  return (
    <GlobalData.Provider value={{playerLife, setPlayerLife}}>
      <div className="app">
      <button onClick={() => setPlayerLife(prevPlayerLife => 3213)}>dsads</button>
        <PlayersComponent />
        <NavbarCenterComponent />
      </div>
    </GlobalData.Provider>
  );
}

export default App;
