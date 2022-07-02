import type {User} from "@/hooks/useUserInfo"
import useBoardElements from "../hooks/useBoardElements"
import styles from "@/styles/css/Menu.module.css"
import { useState, useEffect } from "react"

interface MenuProps {
  gamesWonIncreased: ()=>void,
  increasePoints: (points: number)=>void,
  saveUserInfo: ()=>void,
  userInfo: User,
  currentGame: string,
  playForYou: number,
  roboPlayer: number,
  playForYouToggle: boolean,
  unlock3Card: ()=>void,
  changeCurrentGame: (game: string)=>void,
  unlockGameCost: number,
}


const Menu: React.FC<MenuProps> = (props) => { 
  const {
    randomCardElement,
  } = useBoardElements({...props})

  const [randCardElement, setRandCardElement] = useState<JSX.Element[]>()
  const [ThreeRandCardElement, setThreeRandCardElement] = useState<JSX.Element[]>()

  useEffect(() => {
    setRandCardElement(randomCardElement(1))
    setThreeRandCardElement(randomCardElement(3))
  }, [])

  const BtnElement3Card = () => {
    if(props.userInfo.unlocked3Card){
      return (
        <div className={styles.gameBtn} onClick={()=>props.changeCurrentGame("3card")}>
          {ThreeRandCardElement}
          Start 3 Card Game
        </div>
      )
    }
    return (
        <div className={`${styles.gameBtn} ${styles.locked}`} data-affordable={props.userInfo.userPoints < props.unlockGameCost ? "false" : "true"} onClick={props.unlock3Card}>
          {ThreeRandCardElement}
          Start 3 Card Game
          <div className={styles.unlock}>Unlock this game for {props.unlockGameCost} points</div>
          <div className={styles.lockBody}></div>
          <div className={styles.lockTop}></div>
        </div>

    )
  }


  return (
    <>
      <div className={styles.gameSelection}>
        <div className={styles.gameBtn} onClick={()=>props.changeCurrentGame("normal")}>
          {randCardElement}
          Start 1 Card Game
        </div>
        {BtnElement3Card()}
      </div>
    </>
  )
}

export default Menu;