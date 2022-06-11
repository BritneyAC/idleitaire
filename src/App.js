import { useEffect, useState } from "react"
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
    savedRecently,
    roboPlayerIncreased,
    playForYouIncreased,
    togglePFY,
    // StartGame,
    // playForYou,
    // movesToResume,
    // decreaseMovesToResume
  } = useUserInfo()

  // useEffect(() => {
  //   if(movesToResume > 0){
  //     StartGame()
  //     while(movesToResume > 0){
  //       console.log(movesToResume)
  //       playForYou()
  //       decreaseMovesToResume()
  //     }
  //   }
  // }, [])

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
          <Stats userInfo={userInfo} saveUserInfo={saveUserInfo} savedRecently={savedRecently}/>
          <UpgradePage userInfo={userInfo} roboPlayerIncreased={roboPlayerIncreased} playForYouIncreased={playForYouIncreased} gamesWonIncreased={gamesWonIncreased} increasePoints={increasePoints} togglePFY={togglePFY}/>
        </div>
      </main>
    </div>
  )
}

export default App;
