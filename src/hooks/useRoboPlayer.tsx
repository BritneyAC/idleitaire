import { useEffect } from "react"
import useGameLogic from "./useGameLogic";
import { User } from "./useUserInfo";

interface UseRoboPlayerProps{
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

const useRoboPlayer = (props: UseRoboPlayerProps) => {
  const {deck, 
    cards,
    count,
    isGameRunning,
    gamePoints,
    StartGame,
    playForYou} = useGameLogic({...props})

  useEffect(() => {
    if(props.currentGame === "normal"){
      console.log("useRoboPlayer: normal")
      if(isGameRunning){
        if(props.userInfo.roboPlayer > 0){
          const time = 2500 / props.userInfo.roboPlayer
          const playForYouTimer = setInterval(() => {
            playForYou()}, time)
            return () => clearInterval(playForYouTimer)
        }
      }
    }else if(props.currentGame === "3Card"){
      console.log("useRoboPlayer: 3Card")
      if(isGameRunning){
        if(props.userInfo.robo3CardPlayer > 0){
          const time = 2500 / props.userInfo.robo3CardPlayer
          const playForYouTimer = setInterval(() => {
            playForYou()}, time)
            return () => clearInterval(playForYouTimer)
        }
      }
    }
  }, [isGameRunning, props.userInfo.roboPlayer, props.userInfo.robo3CardPlayer, count, deck, cards])

  return {StartGame, gamePoints, count, isGameRunning}
}

export default useRoboPlayer