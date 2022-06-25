import { useEffect, useState } from "react"
import { trpc } from "@/utils/trpc"

export class User {
  userPoints = 0
  gamesWon = 0
  roboPlayer = 0
  playForYou = 0
  playForYouToggle = true
  timeOfSave = 0
}
export default function useUserInfo(){
  const [savedRecently, setSavedRecently] = useState(false)
  const [name, setName] = useState("Idleitaire")
  const [needToResume, setNeedToResume] = useState(false)
  const [userInfo, setUserInfo] = useState(new User())
  
  useEffect(() => {
    const roboPlayerCost = Math.ceil(
      Math.log((userInfo.roboPlayer + 1) * 3) * 
      (userInfo.roboPlayer + 1) * 40) * 10
    const pFYCost = Math.ceil(
      Math.log((userInfo.playForYou + 1) * 6) * 
      (userInfo.playForYou + 1) * 80) * 10
      if(userInfo.userPoints > pFYCost || userInfo.userPoints > roboPlayerCost){
      const notification = setInterval(()=>{setName(prevName => prevName === "Idleitaire" ? "Upgrade Available" : "Idleitaire")},4000)
      return () => clearInterval(notification)
    } else if(name !== "Idleitaire"){
      setName("Idleitaire")
    }
  },[userInfo])

    
  useEffect(() => {
    const userData = localStorage.getItem("userInfo")
    if(!!userData){
      const save = JSON.parse(userData)
      setUserInfo(save)
      setNeedToResume(true)
    }
  }, [])
  
  useEffect(() => {
    if(needToResume){
      ResumeGame()
      setNeedToResume(false)
    }
    
  }, [needToResume])
  
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
  }
}