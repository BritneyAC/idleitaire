import { useEffect, useState } from "react"

export default function useUserInfo(){
  const [userInfo, setUserInfo] = useState({
    userPoints: 0,
    gamesWon: 0,
    roboPlayer: 0,
    playForYou: 0,
    playForYouToggle: true
  })
  useEffect(() => {
    const save = JSON.parse(localStorage.getItem("userInfo"))
    if(save !== null){
      setUserInfo(save)
    }
  }, [])

  const increasePoints = (points) => {
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
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
  }

  return {userInfo, 
    increasePoints, 
    gamesWonIncreased, 
    roboPlayerIncreased, 
    playForYouIncreased, 
    togglePFY,
    saveUserInfo}
}