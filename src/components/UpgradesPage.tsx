import React, { useEffect } from "react"
import useRoboPlayer from "@/hooks/useRoboPlayer"
import type {User} from "@/hooks/useUserInfo"
import styles from "@/styles/UpgradesPage.module.css"

interface UpgradesPageProps {
  userInfo: User,
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
  togglePFY: ()=>void
  currentGame: string,
}

const UpgradesPage: React.FC<UpgradesPageProps> = (props) => {
  const {StartGame, gamePoints, count, isGameRunning} = useRoboPlayer({...props})

  useEffect(() => {
    if(props.currentGame === "normal"){
      if(!isGameRunning){
        if(props.userInfo.roboPlayer > 0){
          StartGame()
        }
      }
    }else if(props.currentGame === "3Card"){
      if(!isGameRunning){
        if(props.userInfo.robo3CardPlayer > 0){
          StartGame("3Card")
        }
      }
    }
  }, [props.userInfo.roboPlayer, props.userInfo.robo3CardPlayer])
  const {
    roboPlayer,
    playForYou,
    playForYouToggle,
    roboPlayerIncreased, 
    playForYouIncreased, 
    togglePFY, 
    roboPlayerCost, 
    playForYouCost
    } = props
  return(
    <div className={styles.upgradesPage}>
      <h1>Upgrades</h1>
      <div className={styles.upgrade}>
        <p>RoboPlayer (Owned: {roboPlayer})</p>
        <p>Plays games for you in the backgroud</p>
        <p>cost {roboPlayerCost}</p>
        <button onClick={roboPlayerIncreased}>Upgrade</button>
        <p>Points in current game</p>
        <p>{gamePoints}</p>
      </div>
      <div className={styles.upgrade}>
        <p>Play For Me (Owned: {playForYou})</p>
        <p>Plays the main game for you</p>
        <p>cost {playForYouCost}</p>
        <button onClick={playForYouIncreased}>Upgrade</button>
        {Number(playForYou) > 0 && <button onClick={togglePFY}>toggle {playForYouToggle ? "off" : "on"}</button>}
      </div>
    </div>
  )
}

export default UpgradesPage