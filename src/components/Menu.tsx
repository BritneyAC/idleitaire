import type {User} from "@/hooks/useUserInfo"
import useBoardElements from "../hooks/useBoardElements"
import styles from "@/styles/Menu.module.css"
import { useState, useEffect } from "react"

interface MenuProps {
  userInfo: User,
  increasePoints: (points: number)=>void,
  gamesWonIncreased: ()=>void,
  saveUserInfo: ()=>void,
  isInfoShown: boolean,
  unlock3Card: ()=>void,
  currentGame: string,
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
        <div className={`${styles.gameBtn} ${styles.locked} ${props.userInfo.userPoints < 25000 && styles.tooPoor}`} onClick={props.unlock3Card}>
          {ThreeRandCardElement}
          Start 3 Card Game
          <div className={styles.unlock}>Unlock this game for {props.unlockGameCost} points</div>
        </div>

    )
  }


  return (
    <div className={styles.board}>
      <div className={styles.gameSelection}>
        <div className={styles.gameBtn} onClick={()=>props.changeCurrentGame("normal")}>
          {randCardElement}
          Start 1 Card Game
        </div>
        {BtnElement3Card()}
      </div>
    </div>
  )
}

export default Menu;