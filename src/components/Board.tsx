import type { User } from "@/hooks/useUserInfo"
import useBoardElements from "../hooks/useBoardElements"
import styles from "@/styles/Board.module.css"
import { useEffect, useState } from "react"

interface BoardProps {
  gamesWonIncreased: ()=>void,
  increasePoints: (points: number)=>void,
  saveUserInfo: ()=>void,
  userInfo: User,
  isInfoShown: boolean,
  currentGame: string,
  playForYou: number,
  roboPlayer: number,
  playForYouToggle: boolean,
  changeCurrentGame: (game: string)=>void,
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
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={()=>RestartGame()}>Restart Game</button>
        <button className={styles.btn} onClick={()=>{
          props.changeCurrentGame("menu")
        }}>End Game</button>
      </div>
    </>
  )
}

export default Board