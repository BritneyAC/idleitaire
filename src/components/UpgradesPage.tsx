import React, { useEffect, useState } from "react"
import useRoboPlayer from "@/hooks/useRoboPlayer"
import type {User} from "@/hooks/useUserInfo"
import styles from "@/styles/css/UpgradesPage.module.css"
import { FaQuestionCircle } from "react-icons/fa"
import { GrClose } from "react-icons/gr"

interface UpgradesPageProps {
  userInfo: User,
  currentGame: string,
  unlockGameCost: number,

  gamesWonIncreased: ()=>void,
  increasePoints: (points: number)=>void,
  saveUserInfo: ()=>void,


  playForYou: number,
  roboPlayer: number,
  playForYouToggle: boolean,
  roboPlayerCost: number,
  playForYouCost: number,
  roboPlayerIncreased: ()=>void,
  playForYouIncreased: ()=>void,
  togglePFY: ()=>void,
  unlockAutoUpgrade: ()=>void,
  autoUpgradeUnlocked: boolean,
  autoUpgradeToggle: ()=>void,
  autoUpgrade: boolean,
}

const UpgradesPage: React.FC<UpgradesPageProps> = (props) => {
  const {StartGame, gamePoints, count, isGameRunning} = useRoboPlayer({...props})
  const [currentDescription, setCurrentDescription] = useState("none")

  const {
    userInfo,
    currentGame,
    roboPlayer,
    playForYou,
    playForYouToggle,
    roboPlayerIncreased, 
    playForYouIncreased, 
    togglePFY, 
    roboPlayerCost, 
    playForYouCost,
    unlockAutoUpgrade,
    autoUpgradeUnlocked,
    autoUpgradeToggle,
    autoUpgrade,
    unlockGameCost,
  } = props

  
  const changeCurrentDesription = (description: string) => {
    setCurrentDescription(description)
  }

  return(
    <>
      <div className={styles.upgrade}>
        <h1>RoboPlayer</h1>
        <h2>(Owned: {roboPlayer})</h2>
        {currentDescription !== "robo" && <FaQuestionCircle onClick={() => changeCurrentDesription("robo")}/>}
            {currentDescription === "robo" && 
              <div className={styles.description}> 
                <GrClose onClick={() => changeCurrentDesription("none")}/>
                <h2>Plays games for you in the backgroud</h2>
              </div>
            }
        <h3>cost {roboPlayerCost}</h3>
        <button onClick={roboPlayerIncreased}>Upgrade</button>
        <p>Points in current game</p>
        <p>{gamePoints}</p>
      </div>


      <div className={styles.upgrade}>
        <h1>Play For Me</h1>
        <h2>(Owned: {playForYou})</h2>
        {currentDescription !== "pFY" && <FaQuestionCircle onClick={() => changeCurrentDesription("pFY")}/>}
        {currentDescription === "pFY" && 
          <div className={styles.description}> 
            <GrClose onClick={() => changeCurrentDesription("none")}/>
            <h2>Plays the main game for you</h2>
          </div>
        }
        <h3>cost {playForYouCost}</h3>
        <button onClick={playForYouIncreased}>Upgrade</button>
        {playForYou > 0 && 
          <>
            <div className={playForYouToggle ? styles.radioBtnOn : styles.radioBtnOff} onClick={togglePFY}>
              <div className={styles.radioBtnCircle}></div>
            </div>
            <h4>{playForYouToggle ? "On" : "Off"}</h4>
          </>
        }
      </div>


      <div className={styles.upgrade}>
        <h1>Auto Upgrade</h1>
        {currentDescription !== "auto" && <FaQuestionCircle onClick={() => changeCurrentDesription("auto")}/>}
        {currentDescription === "auto" && 
          <div className={styles.description}>
            <GrClose onClick={() => changeCurrentDesription("none")}/>
            <p>Buys upgrades when you can afford them</p> 
          </div>
        }
        {autoUpgradeUnlocked ? 
          <>
            <div className={autoUpgrade ? styles.radioBtnOn : styles.radioBtnOff} onClick={autoUpgradeToggle}>
              <div className={styles.radioBtnCircle}></div>
            </div>
            <h4>{autoUpgrade ? "On" : "Off"}</h4>
          </> :
          <>
            <h1>cost {unlockGameCost * 2}</h1>
            <button onClick={unlockAutoUpgrade}>Buy</button>
          </>
        } 
      </div>
    </>
  )
}

export default UpgradesPage