import { useEffect } from "react"
import useGameLogic from "./useGameLogic";
import { User } from "./useUserInfo";

interface UseRoboPlayerProps{
  userInfo: User,
  gamesWonIncreased: ()=>void,
  increasePoints: (points: number)=>void,
  saveUserInfo: ()=>void,
  currentGame: string,
  playForYou: number,
  roboPlayer: number,
  playForYouToggle: boolean,
  roboPlayerCost: number,
  playForYouCost: number,
  roboPlayerIncreased: ()=>void,
  playForYouIncreased: ()=>void,
  togglePFY: ()=>void
}

const useRoboPlayer = (props: UseRoboPlayerProps) => {
  const {
    count,
    isGameRunning,
    gamePoints,
    StartGame,} = useGameLogic({...props, roboGame: true})

  useEffect(() => {
    StartGame(props.currentGame)
  }, [])

  return {StartGame, gamePoints, count, isGameRunning}
}

export default useRoboPlayer