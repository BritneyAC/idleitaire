import { useEffect, useState } from "react"
import useGameLogic from "./useGameLogic"

export default function useUserInfo(){
  const [savedRecently, setSavedRecently] = useState(false)
  const [name, setName] = useState("Idleitaire")
  // const [movesToResume, setMovesToResume] = useState(0)
  const [userInfo, setUserInfo] = useState({
    userPoints: 0,
    gamesWon: 0,
    roboPlayer: 0,
    playForYou: 0,
    playForYouToggle: true,
    timeOfSave: 0
  })
  const increasePoints = (points) => {
    setUserInfo(prevInfo => ({
      ...prevInfo, 
      userPoints: prevInfo.userPoints + points
    }))
  }

  useEffect(() => {
    const roboPlayerCost = Math.ceil(
      Math.log((userInfo.roboPlayer + 1) * 3) * 
      (userInfo.roboPlayer + 1) * 40) * 10
    const pFYCost = Math.ceil(
      Math.log((userInfo.playForYou + 1) * 6) * 
      (userInfo.playForYou + 1) * 80) * 10
      if(userInfo.userPoints > pFYCost || userInfo.userPoints > roboPlayerCost){
      console.log(pFYCost, roboPlayerCost)
      const notification = setInterval(()=>{setName(prevName => prevName === "Idleitaire" ? "Upgrade Available" : "Idleitaire")},4000)
      return () => clearInterval(notification)
    } else if(name !== "Idleitaire"){
      setName("Idleitaire")
    }
  },[userInfo])

  // const {
  //   StartGame,

  //   playForYou} = useGameLogic({userInfo, increasePoints})

  useEffect(() => {
    const save = JSON.parse(localStorage.getItem("userInfo"))
    if(save !== null){
      setUserInfo(save)
      // const time = new Date().getTime() 
      // let movesPassed = 0
      // if(save.roboPlayer > 0){
      //   movesPassed = movesPassed + Math.round((time - save.timeOfSave) / (2500 / save.roboPlayer))
      // }
      // if(save.playForYou > 0){
      //   movesPassed = movesPassed + Math.round((time - save.timeOfSave) / (5000 / save.playForYou))
      // }
      // setMovesToResume(movesPassed)
    }
  }, [])

  // const decreaseMovesToResume = () => {
  //   setMovesToResume(prevMoves => {if(prevMoves > 0){return prevMoves = prevMoves - 1}})
  // }


  const gamesWonIncreased = () => {
    setUserInfo(prevInfo => ({...prevInfo, gamesWon: prevInfo.gamesWon + 1}))
  }
  
  const roboPlayerIncreased = () => {
    const cost = Math.ceil(
      Math.log((userInfo.roboPlayer + 1) * 3) * 
      (userInfo.roboPlayer + 1) * 40) * 10
    if(userInfo.userPoints > cost){
        setUserInfo(prevInfo => ({
          ...prevInfo, 
          userPoints: prevInfo.userPoints - cost,
          roboPlayer: prevInfo.roboPlayer + 1
  }))}}
  
  const playForYouIncreased = () => {
    const cost = Math.ceil(
      Math.log((userInfo.playForYou + 1) * 6) * 
      (userInfo.playForYou + 1) * 80) * 10
    if(userInfo.userPoints > cost){
        setUserInfo(prevInfo => ({
          ...prevInfo, 
          userPoints: prevInfo.userPoints - cost,
          playForYou: prevInfo.playForYou + 1
  }))}}

  const togglePFY = () => {
    setUserInfo(prevInfo => ({...prevInfo, playForYouToggle: !prevInfo.playForYouToggle}))
  }

  const saveUserInfo = () => {
    const time = new Date().getTime()
    const newUserInfo = {...userInfo, timeOfSave: time}
    localStorage.setItem("userInfo", JSON.stringify(newUserInfo))
    setSavedRecently(true)
    setTimeout(() => setSavedRecently(false), 5000)
  }

  return {userInfo, 
    increasePoints, 
    gamesWonIncreased, 
    roboPlayerIncreased, 
    playForYouIncreased, 
    togglePFY,
    saveUserInfo,
    savedRecently,
    name,
    // StartGame,
    // movesToResume,
    // playForYou,
    // decreaseMovesToResume
  }
}