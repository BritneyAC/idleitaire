import { useEffect } from "react"
import useGameLogic from "./useGameLogic";

export default function useRoboPlayer(props){
  const {deck, 
    cards,
    count,
    isGameRunning,
    setCount,
    gamePoints,
    setGamePoints,
    prevClicked,
    setPrevClicked,
    StartGame,
    SndGame,
    RestartGame,
    NewDeck,
    flidCard,
    resetDeck,
    searchPlaceable,
    removeFromPile,
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
  }, [cards, deck, count])


  return {StartGame, gamePoints, count}
}