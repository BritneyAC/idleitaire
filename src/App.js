import { useState } from "react"
import "./App.css"
import Board from "./components/Board"
import Stats from "./components/Stats"
import UpgradePage from "./components/UpgradesPage"
import useUserInfo from "./hooks/useUserInfo"

function App() {
  const [isInfoShown, setIsInfoShown] = useState(true)
  const {
    increasePoints,
    gamesWonIncreased,
    userInfo,
    saveUserInfo,
    roboPlayerIncreased,
    playForYouIncreased,
    togglePFY
  } = useUserInfo()

  const toggleInfo = () => {
    setIsInfoShown(prevShown => !prevShown)
  }

  return (
    <div className="app">
      <header className="app-header">
      </header>
      <main className="main" >
        <h3 className="show-info" onClick={toggleInfo}>{isInfoShown ? "hide-info" : "show-info"}</h3>
        <Board userInfo={userInfo} increasePoints={increasePoints} gamesWonIncreased={gamesWonIncreased} isInfoShown={isInfoShown}/>
        <div className="info">
          <Stats userInfo={userInfo} saveUserInfo={saveUserInfo}/>
          <UpgradePage userInfo={userInfo} roboPlayerIncreased={roboPlayerIncreased} playForYouIncreased={playForYouIncreased} gamesWonIncreased={gamesWonIncreased} increasePoints={increasePoints} togglePFY={togglePFY}/>
        </div>
      </main>
    </div>
  )
}

export default App;
