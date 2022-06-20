import { card } from "@/hooks/useGameLogic"
import type { User } from "@/hooks/useUserInfo"
import useBoardElements from "../hooks/useBoardElements"
import styles from "@/styles/Board.module.css"

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
    undoMove,
    gamePoints,
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
  
  return(
    <div className={styles.board} data-info-shown={isInfoShown ? "true" : "false"}>
      { isGameRunning ?
        <>
          <div className={styles.playspace}>
            <div className={styles.top}>
              <div className={styles.winPiles}>
                <div className={styles.clubs}>{ClubsElements}</div>
                <div className={styles.spades}>{SpadesElements}</div>
                <div className={styles.hearts}>{HeartsElements}</div>
                <div className={styles.diamonds}>{DiamondsElements}</div>
              </div>
              <div className={styles.deck}>
                {DeckElements}
              </div>
              <div className={styles.playable}>
                {PlayableElements}
              </div>
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
          <button className={styles.btn} onClick={RestartGame}>Restart Game</button>
        </> :
        <button className={styles.btn} onClick={StartGame}>Start Game</button>
      }
    </div>
  )
}

export default Board