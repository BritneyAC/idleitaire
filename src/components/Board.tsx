import type { User } from "@/hooks/useUserInfo"
import useBoardElements from "../hooks/useBoardElements"
import styles from "@/styles/Board.module.css"
import { useEffect, useState } from "react"

interface BoardProps {
  gamesWonIncreased: ()=>void,
  increasePoints: (points: number)=>void,
  saveUserInfo: ()=>void,
  userInfo: User,
  currentGame: string,
  whichInfoSettingShown: string,
  toggleInfoSetting: (currentTab: string)=>void,

  playForYou: number,
  roboPlayer: number,
  playForYouToggle: boolean,
  changeCurrentGame: (game: string)=>void,
}

const Board: React.FC<BoardProps> = (props) => { 
  const [confirmationShown, setConfirmationShown] = useState("none")
  const {
    cards,
    isGameRunning,
    RestartGame,
    StartGame,
    EndGame,
    gameType,
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

  const changeConfirmation = (description: string) => {
    setConfirmationShown(description)
  }


  const confirmation = (confirmationShown: string) => {
    let confirm
    if(confirmationShown === "restart"){
      confirm = <div>
      <h1>Are you sure you want to restart the game?</h1>
    </div>
    } else if(confirmationShown === "end"){
      confirm = <div>
        <h1>
          Are you sure you want to end the game?
        </h1>
        <h1>
          And go back to the main menu?
        </h1>
      </div>
    }
    if(!!confirm){
      const handeClick = (confirm: string = confirmationShown) => {
        if(confirm === "restart"){
          RestartGame()
        } else if(confirm === "end"){
          EndGame()
          props.changeCurrentGame("menu")
        }
        changeConfirmation("none")
      }
      props.toggleInfoSetting("none")

      return(    
        <div className={styles.confirmation}>
        {confirm}
        <div className={styles.confirmBtn} onClick={()=>handeClick()}>
          <h1>Yes</h1>
        </div>
        <div className={styles.confirmBtn} onClick={()=>setConfirmationShown("none")}>
          <h1>No</h1>
        </div>
      </div>
  )}
}
  
  return(
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
      <div className={`${styles.buttons} ${props.whichInfoSettingShown !== "none" && styles.open}`}>
        <div className={styles.btn} onClick={()=>changeConfirmation("restart")}>
          <h1>Restart Game</h1>
        </div>
        <div className={styles.btn} onClick={()=>changeConfirmation("end")}><h1>End Game</h1></div>
      </div>
      {confirmationShown !== "none" && confirmation(confirmationShown)}
    </>
  )
}

export default Board