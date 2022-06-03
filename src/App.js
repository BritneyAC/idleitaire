import "./App.css"
import Board from "./board"
import Stats from "./stats"
import UpgradePage from "./upgradesPage"
import useUserInfo from "./hooks/useUserInfo"

function App() {
  const {
    gamesWonIncreased,
    userInfo,
    saveUserInfo,
    roboPlayerIncreased,
    playForYouIncreased
  } = useUserInfo()

  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <main>
        <Board props={{gamesWonIncreased}}/>
        <Stats props={{userInfo, saveUserInfo}}/>
        <UpgradePage props={{roboPlayerIncreased, playForYouIncreased}}/>
      </main>
    </div>
  );
}

export default App;
