import React, { useEffect } from "react"
import useRoboPlayer from "@/hooks/useRoboPlayer"
import type {User} from "@/hooks/useUserInfo"
import styles from "@/styles/UpgradesPage.module.css"

interface UpgradesPageProps {
  userInfo: User,
  gamesWonIncreased: ()=>void,
  increasePoints: (points: number)=>void,
  saveUserInfo: ()=>void,
  roboPlayerIncreased: ()=>void,
  playForYouIncreased: ()=>void,
  togglePFY: ()=>void
}

const UpgradesPage: React.FC<UpgradesPageProps> = (props) => {
  const {StartGame, gamePoints, isGameRunning} = useRoboPlayer({...props})

  useEffect(() => {
    if(!isGameRunning){
      if(props.userInfo.roboPlayer > 0){
        StartGame()
      }
    }
  }, [props.userInfo.roboPlayer])


  return(
    <div className={styles.upgradesPage}>
      <h1>Upgrades</h1>
      <div className={styles.upgrade}>
        <p>RoboPlayer (Owned: {props.userInfo.roboPlayer})</p>
        <p>Plays games for you in the backgroud</p>
        <p>cost {
          Math.ceil(
            Math.log(
              (props.userInfo.roboPlayer + 1) * 3) * 
              (props.userInfo.roboPlayer + 1) * 40
        ) * 10}</p>
        <button onClick={props.roboPlayerIncreased}>Upgrade</button>
        <p>Points in current game</p>
        <p>{gamePoints}</p>
      </div>
      <div className={styles.upgrade}>
        <p>Play For Me (Owned: {props.userInfo.playForYou})</p>
        <p>Plays the main game for you</p>
        <p>cost {
          Math.ceil(
            Math.log(
              (props.userInfo.playForYou + 1) * 6) * 
              (props.userInfo.playForYou + 1) * 80
        ) * 10}</p>
        <button onClick={props.playForYouIncreased}>Upgrade</button>
        {props.userInfo.playForYou > 0 && <button onClick={props.togglePFY}>toggle {props.userInfo.playForYouToggle ? "off" : "on"}</button>}
      </div>
    </div>
  )
}

export default UpgradesPage