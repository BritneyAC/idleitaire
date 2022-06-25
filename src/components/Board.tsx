import type { User } from "@/hooks/useUserInfo"
import useBoardElements from "../hooks/useBoardElements"
import styles from "@/styles/Board.module.css"
import { useEffect, useState } from "react"

interface BoardProps {
  userInfo: User,
  increasePoints: (points: number)=>void,
  gamesWonIncreased: ()=>void,
  saveUserInfo: ()=>void,
  isInfoShown: boolean,
}

const Board: React.FC<BoardProps> = (props) => { 
  const {
    isInfoShown,
    cards,
    isGameRunning,
    RestartGame,
    StartGame,
    EndGame,
    gameType,
    undoMove,
    gamePoints,
    randomCardElement,
    ClubsElements, 
    SpadesElements, 
    HeartsElements, 
    DiamondsElements, 
    DeckElements,
    PlayableElements,
    Column1Elements,
    Column2Elements,
    Column3Elements,
    Column4Elements,
    Column5Elements,
    Column6Elements,
    Column7Elements,
  } = useBoardElements({...props})

  const [randCardElement, setRandCardElement] = useState<JSX.Element[]>()
  const [ThreeRandCardElement, setThreeRandCardElement] = useState<JSX.Element[]>()

  useEffect(() => {
    setRandCardElement(randomCardElement(1))
    setThreeRandCardElement(randomCardElement(3))
  }, [])
  
  return(
    <div className={styles.board} data-info-shown={isInfoShown ? "true" : "false"}>
      { isGameRunning ?
        <>
          <div className={styles.playspace}>
            <div data-game-type={gameType} className={styles.top}>
              <div className={styles.winPiles}>
                <div className={styles.clubs}>{ClubsElements}</div>
                <div className={styles.spades}>{SpadesElements}</div>
                <div className={styles.hearts}>{HeartsElements}</div>
                <div className={styles.diamonds}>{DiamondsElements}</div>
              </div>
              <div className={styles.deck}>
                {DeckElements}
              </div>
              {gameType != "spider" && <div className={styles.playable}>
                {PlayableElements}
              </div>}
            </div>
            <div className={styles.main}>
              <div className={styles.column0}>{Column1Elements}</div>
              <div className={styles.column1}>{Column2Elements}</div>
              <div className={styles.column2}>{Column3Elements}</div>
              <div className={styles.column3}>{Column4Elements}</div>
              <div className={styles.column4}>{Column5Elements}</div>
              <div className={styles.column5}>{Column6Elements}</div>
              <div className={styles.column6}>{Column7Elements}</div>
              {cards.previousMoves.length > 0 && <button className={styles.undo} onClick={undoMove}>undo</button>}
              <p className={styles.points}>Points: {gamePoints}</p>
            </div>
          </div>
          {/* hopefully make a confirmation dialog box eventually */}
          <div className={styles.buttons}>
            <button className={styles.btn} onClick={RestartGame}>Restart Game</button>
            <button className={styles.btn} onClick={EndGame}>End Game</button>
          </div>
        </> :
        <div className={styles.gameSelection}>
          <div className={styles.gameBtn} onClick={()=>StartGame("normal")}>
            {randCardElement}
            Start 1 Card Game
          </div>
          <div className={styles.ThreeCardBtn} onClick={()=>StartGame("3card")}>
            {ThreeRandCardElement}
            Start 3 Card Game
          </div>
          <div className={styles.spiderBtn} onClick={()=>StartGame("spider")}>Start Spider Solitaire Game</div>
        </div>
      }
    </div>
  )
}

export default Board