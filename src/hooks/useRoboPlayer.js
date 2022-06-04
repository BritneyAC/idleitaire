import { useEffect } from "react"
import useGameLogic from "./useGameLogic";

export default function useRoboPlayer(props){
  const {deck, 
    cards,
    count,
    isGameRunning,
    setCount,
    gamePoints,
    setPrevClicked,
    StartGame,
    playForYou} = useGameLogic({...props})


  useEffect(() => {
    if(isGameRunning){
      if(props.userInfo.roboPlayer > 0){
        const time = 5000 / props.userInfo.roboPlayer
        const playForYouTimer = setInterval(() => {
          if(count % 12 === 1){
            setPrevClicked([])
          }
          playForYou()}, time)
          return () => clearInterval(playForYouTimer)
        }
      }
    
  }, [isGameRunning, props.userInfo.roboPlayer, count, deck, cards])


  return {StartGame, gamePoints, count}
}