import { useEffect } from "react"
import useGameLogic from "./useGameLogic";
import { User } from "./useUserInfo";

interface UseRoboPlayerProps{
  userInfo: User,
  gamesWonIncreased: ()=>void,
  increasePoints: (points: number)=>void,
  saveUserInfo: ()=>void
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
    if(isGameRunning){
      if(props.userInfo.roboPlayer > 0){
        const time = 2500 / props.userInfo.roboPlayer
        const playForYouTimer = setInterval(() => {
          playForYou()}, time)
          return () => clearInterval(playForYouTimer)
        }
      }
    
  }, [isGameRunning, props.userInfo.roboPlayer, count, deck, cards])


  return {StartGame, gamePoints, count, isGameRunning}
}

export default useRoboPlayer