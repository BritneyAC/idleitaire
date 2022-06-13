import { useEffect } from "react"
import useRoboPlayer from "../hooks/useRoboPlayer"

export default function UpgradesPage(props){
  const {StartGame, gamePoints, isGameRunning} = useRoboPlayer({...props})

  useEffect(() => {
    if(!isGameRunning){
      if(props.userInfo.roboPlayer > 0){
        StartGame()
      }
    }
  }, [props.userInfo.roboPlayer])


  return(
    <div className="upgrades-page">
      <h1>Upgrades</h1>
      <div className="upgrades-page--upgrade">
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
      <div className="upgrades-page--upgrade">
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