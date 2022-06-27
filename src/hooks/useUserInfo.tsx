import { useEffect, useMemo, useState } from "react"
import { trpc } from "@/utils/trpc"

export class User {
  timeOfSave = 0
  userPoints = 0
  gamesWon = 0
  roboPlayer = 0
  playForYou = 0
  playForYouToggle = true
  unlocked3Card = false
  user3CardPoints = 0
  games3CardWon = 0
  robo3CardPlayer = 0
  play3CardForYou = 0
  play3CardForYouToggle = true
}
export default function useUserInfo(){
  const [savedRecently, setSavedRecently] = useState(false)
  const [name, setName] = useState("Idleitaire")
  const [needToResume, setNeedToResume] = useState(false)
  const [userInfo, setUserInfo] = useState(new User())
  const roboPlayerCost = useMemo(() => {return Math.ceil(
      Math.log((userInfo.roboPlayer + 1) * 3) * 
      (userInfo.roboPlayer + 1) * 40) * 10}, [userInfo])
  const playForYouCost = useMemo(() => {return Math.ceil(
      Math.log((userInfo.playForYou + 1) * 6) * 
      (userInfo.playForYou + 1) * 80) * 10}, [userInfo])
  const robo3CardPlayerCost = useMemo(() => {return Math.ceil(
      Math.log((userInfo.robo3CardPlayer + 1) * 3) * 
      (userInfo.robo3CardPlayer + 1) * 40) * 10}, [userInfo])
  const play3CardForYouCost = useMemo(() => {return Math.ceil(
      Math.log((userInfo.play3CardForYou + 1) * 6) * 
      (userInfo.play3CardForYou + 1) * 80) * 10}, [userInfo])
  const unlockGameCost = useMemo(() => {return 10000}, [])
  

  //changes document title every 4 seconds if an upgrade is available
  useEffect(() => {
      if(userInfo.userPoints > playForYouCost || userInfo.userPoints > roboPlayerCost){
      const notification = setInterval(()=>{setName(prevName => prevName === "Idleitaire" ? "Upgrade Available" : "Idleitaire")},4000)
      return () => clearInterval(notification)
    } else if(name !== "Idleitaire"){
      setName("Idleitaire")
    }
  },[userInfo])
  
  //changes document title every 4 seconds if an upgrade is available on 3 card game
  useEffect(() => {
      if(userInfo.user3CardPoints > play3CardForYouCost || userInfo.user3CardPoints > robo3CardPlayerCost){
      const notification = setInterval(()=>{setName(prevName => prevName === "Idleitaire" ? "Upgrade Available" : "Idleitaire")},4000)
      return () => clearInterval(notification)
    } else if(name !== "Idleitaire"){
      setName("Idleitaire")
    }
  },[userInfo])

  //retrieves user info from local storage    
  useEffect(() => {
    const userData = localStorage.getItem("userInfo")
    if(!!userData){
      const save = {...new User(), ...JSON.parse(userData)}
      setUserInfo(save)
      setNeedToResume(true)
    }
  }, [])
  
  //helper that ensures that ResumeGame is only ran once
  useEffect(() => {
    if(needToResume){
      ResumeGame()
      userInfo.unlocked3Card === true && Resume3CardGame()
      setNeedToResume(false)
    }
    
  }, [needToResume])

  const saveUserInfo = () => {
    const time = new Date().getTime()
    const newUserInfo = {...userInfo, timeOfSave: time}
    localStorage.setItem("userInfo", JSON.stringify(newUserInfo))
    setSavedRecently(true)
    setTimeout(() => setSavedRecently(false), 5000)
  }


  // ----------------------------------
  // info for 3 card game
  // ----------------------------------
  

  const ResumeGame = () => {
    const time = new Date().getTime() 
    let movesToResume = 0
    if(userInfo.roboPlayer > 0){
      movesToResume = movesToResume + Math.min((200 * userInfo.roboPlayer) + 500, Math.round((time - userInfo.timeOfSave) / (2500 / userInfo.roboPlayer)))
    }
    if(userInfo.playForYou > 0){
      movesToResume = movesToResume + Math.min((200 * userInfo.playForYou) + 500, Math.round((time - userInfo.timeOfSave) / (5000 / userInfo.playForYou)))
    }
    while(movesToResume > 100){
      increasePoints(140)
      movesToResume = movesToResume - 100
  }}

  const increasePoints = (points: number) => {
    setUserInfo(prevInfo => ({
      ...prevInfo, 
      userPoints: prevInfo.userPoints + points
    }))
  }

  const gamesWonIncreased = () => {
    setUserInfo(prevInfo => ({...prevInfo, gamesWon: prevInfo.gamesWon + 1}))
  }
  
  const roboPlayerIncreased = () => {
      if(userInfo.userPoints > roboPlayerCost){
        setUserInfo(prevInfo => ({
          ...prevInfo, 
          userPoints: prevInfo.userPoints - roboPlayerCost,
          roboPlayer: prevInfo.roboPlayer + 1
  }))}}
  
  const playForYouIncreased = () => {
    if(userInfo.userPoints > playForYouCost){
        setUserInfo(prevInfo => ({
          ...prevInfo, 
          userPoints: prevInfo.userPoints - playForYouCost,
          playForYou: prevInfo.playForYou + 1
  }))}}

  const togglePFY = () => {
    setUserInfo(prevInfo => ({...prevInfo, playForYouToggle: !prevInfo.playForYouToggle}))
  }


  // ----------------------------------
  // info for 3 card game
  // ----------------------------------

  const unlock3Card = () => {
    if(userInfo.userPoints > unlockGameCost){

      setUserInfo(prevInfo => ({
        ...prevInfo, 
        unlocked3Card: true,
        userPoints: prevInfo.userPoints - unlockGameCost  
      }))
    }
  }


  const Resume3CardGame = () => {
    const time = new Date().getTime() 
    let movesToResume = 0
    if(userInfo.robo3CardPlayer > 0){
      movesToResume = movesToResume + Math.min((200 * userInfo.robo3CardPlayer) + 500, Math.round((time - userInfo.timeOfSave) / (2500 / userInfo.robo3CardPlayer)))
    }
    if(userInfo.play3CardForYou > 0){
      movesToResume = movesToResume + Math.min((200 * userInfo.play3CardForYou) + 500, Math.round((time - userInfo.timeOfSave) / (5000 / userInfo.play3CardForYou)))
    }
    while(movesToResume > 100){
      increasePoints(140)
      movesToResume = movesToResume - 100
  }}

  const increase3CardPoints = (points: number) => {
    setUserInfo(prevInfo => ({
      ...prevInfo, 
      user3CardPoints: prevInfo.user3CardPoints + points}))
  }

  const gamesWon3CardIncreased = () => {
    setUserInfo(prevInfo => ({...prevInfo, games3CardWon: prevInfo.games3CardWon + 1}))
  }

  const robo3CardPlayerIncreased = () => {
    const cost = Math.ceil(
      Math.log((userInfo.robo3CardPlayer + 1) * 3) * 
      (userInfo.robo3CardPlayer + 1) * 40) * 10
      if(userInfo.user3CardPoints > cost){
        setUserInfo(prevInfo => ({
          ...prevInfo, 
          user3CardPoints: prevInfo.user3CardPoints - cost,
          Robo3CardPlayer: prevInfo.robo3CardPlayer + 1
  }))}}

  const play3CardForYouIncreased = () => {
    const cost = Math.ceil(
      Math.log((userInfo.play3CardForYou + 1) * 6) * 
      (userInfo.play3CardForYou + 1) * 80) * 10
    if(userInfo.user3CardPoints > cost){
        setUserInfo(prevInfo => ({
          ...prevInfo, 
          user3CardPoints: prevInfo.user3CardPoints - cost,
          play3CardForYou: prevInfo.play3CardForYou + 1
  }))}}

  const toggle3CardPFY = () => {
    setUserInfo(prevInfo => ({...prevInfo, play3CardForYouToggle: !prevInfo.play3CardForYouToggle}))
  }



  return {userInfo, 
    increasePoints, 
    gamesWonIncreased,
    roboPlayerCost, 
    playForYouCost, 
    robo3CardPlayerCost, 
    play3CardForYouCost, 
    roboPlayerIncreased, 
    playForYouIncreased, 
    togglePFY,
    unlock3Card,
    unlockGameCost,
    increase3CardPoints,
    gamesWon3CardIncreased,
    robo3CardPlayerIncreased,
    play3CardForYouIncreased,
    toggle3CardPFY,
    saveUserInfo,
    savedRecently,
    name,
  }
}