import { useEffect } from "react"
import useGameLogic from "./useGameLogic";

export default function useRoboPlayer(props){
  const {deck, 
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
          setCount(prevCount => prevCount + 1)
          if(count % 12 === 1){
            setPrevClicked([])
            console.log("Robo", count)
          }
          playForYou()}, time)
          return () => clearInterval(playForYouTimer)
        }
      }
    
    if(deck.length === 0){
      setPrevClicked([])
    }
  }, [isGameRunning, props.userInfo.roboPlayer])


  return {StartGame, gamePoints, count}
}