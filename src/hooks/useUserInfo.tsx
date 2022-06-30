import { useEffect, useMemo, useState } from "react"
import useAutoUpgrade from "@/hooks/useAutoUpgrade"
// import { trpc } from "@/utils/trpc"

export class User {
  timeOfSave = 0
  autoSave = true
  pricesSetting = "normal"

  userPoints = 0
  gamesWon = 0
  roboPlayer = 0
  playForYou = 0
  playForYouToggle = true
  autoUpgradeUnlocked = false
  autoUpgrade = false
  
  unlocked3Card = false
  user3CardPoints = 0
  games3CardWon = 0
  robo3CardPlayer = 0
  play3CardForYou = 0
  play3CardForYouToggle = true
  autoUpgrade3CardUnlocked = false
  autoUpgrade3Card = false
}
export default function useUserInfo(props: (infoSetting: string)=>void) {
  const [savedRecently, setSavedRecently] = useState(false)
  const [name, setName] = useState("Idleitaire")
  const [needToResume, setNeedToResume] = useState(false)
  const [userInfo, setUserInfo] = useState(new User())
  const [pricesMultiplier, setPricesMultiplier] = useState(1)

  //prices setting
  const roboPlayerCost = useMemo(() => {return pricesMultiplier * Math.ceil(
      Math.log((userInfo.roboPlayer + 1) * 3) * 
      (userInfo.roboPlayer + 1) * 40) * 10}, [userInfo, pricesMultiplier])
  const playForYouCost = useMemo(() => {return pricesMultiplier * Math.ceil(
      Math.log((userInfo.playForYou + 1) * 6) * 
      (userInfo.playForYou + 1) * 80) * 10}, [userInfo, pricesMultiplier])
  const robo3CardPlayerCost = useMemo(() => {return pricesMultiplier * Math.ceil(
      Math.log((userInfo.robo3CardPlayer + 1) * 3) * 
      (userInfo.robo3CardPlayer + 1) * 40) * 10}, [userInfo, pricesMultiplier])
  const play3CardForYouCost = useMemo(() => {return pricesMultiplier * Math.ceil(
      Math.log((userInfo.play3CardForYou + 1) * 6) * 
      (userInfo.play3CardForYou + 1) * 80) * 10}, [userInfo, pricesMultiplier])
  const unlockGameCost = useMemo(() => {return pricesMultiplier * 10000}, [pricesMultiplier])
  

  //changes document title every 4 seconds if an upgrade is available
  useEffect(() => {
      if(userInfo.userPoints > playForYouCost || userInfo.userPoints > roboPlayerCost){
      const notification = setInterval(()=>{setName(prevName => prevName === "Idleitaire" ? "Upgrade Available" : "Idleitaire")},4000)
      return () => clearInterval(notification)
    } else if(name !== "Idleitaire"){
      setName("Idleitaire")
    }
  },[userInfo])

  // write cheat behavior here
  useEffect(() => {
    if(userInfo.pricesSetting === "normal"){
      setPricesMultiplier(1)
    } else if(userInfo.pricesSetting === "half"){
      setPricesMultiplier(0.5)
    } else if(userInfo.pricesSetting === "free"){
      setPricesMultiplier(0)
    }
  },[userInfo.pricesSetting])

  
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
      let save
      try{
        save = {...new User(), ...JSON.parse(userData)}
      }catch{
        save = new User()
      }
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
      props("none")
    }
  }, [needToResume])

  const saveUserInfo = () => {
    const time = new Date().getTime()
    const newUserInfo = {...userInfo, timeOfSave: time}
    localStorage.setItem("userInfo", JSON.stringify(newUserInfo))
    setSavedRecently(true)
    setTimeout(() => setSavedRecently(false), 5000)
  }

  const autoSaveToggle = () => {
    setUserInfo(prevUserInfo => ({...prevUserInfo, autoSave: !prevUserInfo.autoSave}))
  }

  const priceSettingToggle = () => {
    setUserInfo(prevUserInfo => {
      let newSetting = "normal"
      if(prevUserInfo.pricesSetting === "normal"){
        newSetting = "half"
      } else if(prevUserInfo.pricesSetting === "half"){
        newSetting = "free"
      } else if(prevUserInfo.pricesSetting === "free"){
        newSetting = "normal"
      }
      return ({
        ...prevUserInfo, 
        pricesSetting: newSetting
      })
    })
  }
  // ----------------------------------
  // info for 1 card game
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
    increasePoints(Math.trunc(1.4 * (movesToResume / 10)) * 10)
  }

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
      if(userInfo.userPoints >= roboPlayerCost){
        setUserInfo(prevInfo => ({
          ...prevInfo, 
          userPoints: prevInfo.userPoints - roboPlayerCost,
          roboPlayer: prevInfo.roboPlayer + 1
  }))}}
  
  const playForYouIncreased = () => {
    if(userInfo.userPoints >= playForYouCost){
        setUserInfo(prevInfo => ({
          ...prevInfo, 
          userPoints: prevInfo.userPoints - playForYouCost,
          playForYou: prevInfo.playForYou + 1
  }))}}

  const togglePFY = () => {
    setUserInfo(prevInfo => ({...prevInfo, playForYouToggle: !prevInfo.playForYouToggle}))
  }

  const checkForUpgrades = () => {
    if(userInfo.userPoints >= playForYouCost){
      playForYouIncreased()
    }
    if(userInfo.userPoints >= roboPlayerCost){
      roboPlayerIncreased()
    }
  }

  useEffect(()=>{
    if(userInfo.pricesSetting !== "free"){
      if(userInfo.autoUpgradeUnlocked){
        if(userInfo.autoUpgrade){
          checkForUpgrades()
        }

      }
    }
  },[userInfo.autoUpgrade, userInfo.autoUpgradeUnlocked, userInfo.userPoints, playForYouCost, roboPlayerCost])

  const unlockAutoUpgrade = () => {
    if(userInfo.userPoints >= unlockGameCost * 2){
      setUserInfo(prevInfo => ({
        ...prevInfo, 
        userPoints: prevInfo.userPoints - unlockGameCost * 2,
        autoUpgradeUnlocked: true
      }))
    }
  }

  const autoUpgradeToggle = () => {
    setUserInfo(prevInfo => ({...prevInfo, autoUpgrade: !prevInfo.autoUpgrade}))
  }
  

  // ----------------------------------
  // info for 3 card game
  // ----------------------------------

  const unlock3Card = () => {
    if(userInfo.userPoints >= unlockGameCost){

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
    if(userInfo.user3CardPoints >= robo3CardPlayerCost){
      setUserInfo(prevInfo => ({
        ...prevInfo, 
        user3CardPoints: prevInfo.user3CardPoints - robo3CardPlayerCost,
        robo3CardPlayer: prevInfo.robo3CardPlayer + 1
  }))}}

  const play3CardForYouIncreased = () => {
    if(userInfo.user3CardPoints >= play3CardForYouCost){
        setUserInfo(prevInfo => ({
          ...prevInfo, 
          user3CardPoints: prevInfo.user3CardPoints - play3CardForYouCost,
          play3CardForYou: prevInfo.play3CardForYou + 1
  }))}}

  const toggle3CardPFY = () => {
    setUserInfo(prevInfo => ({...prevInfo, play3CardForYouToggle: !prevInfo.play3CardForYouToggle}))
  }

  const checkFor3CardUpgrades = () => {
    if(userInfo.user3CardPoints >= play3CardForYouCost){
      play3CardForYouIncreased()
    }
    if(userInfo.user3CardPoints >= robo3CardPlayerCost){
      robo3CardPlayerIncreased()
    }
  }

  useEffect(()=>{
    if(userInfo.pricesSetting !== "free"){
      if(userInfo.autoUpgrade3CardUnlocked){
        if(userInfo.autoUpgrade3Card){
          checkFor3CardUpgrades()
        }

      }
    }
  },[userInfo.autoUpgrade, userInfo.autoUpgradeUnlocked, userInfo.userPoints, playForYouCost, roboPlayerCost])

  const unlockAutoUpgrade3Card = () => {
    if(userInfo.user3CardPoints >= unlockGameCost * 2){
      setUserInfo(prevInfo => ({
        ...prevInfo, 
        userPoints: prevInfo.user3CardPoints - unlockGameCost * 2,
        autoUpgrade3CardUnlocked: true
      }))
    }
  }

  const autoUpgrade3CardToggle = () => {
    setUserInfo(prevInfo => ({...prevInfo, autoUpgrade3Card: !prevInfo.autoUpgrade3Card}))
  }



  return {userInfo, 
    saveUserInfo,
    savedRecently,
    autoSaveToggle,
    priceSettingToggle,
    unlockGameCost,
    name,


    increasePoints, 
    gamesWonIncreased,
    roboPlayerCost, 
    playForYouCost, 
    roboPlayerIncreased, 
    playForYouIncreased, 
    togglePFY,
    unlockAutoUpgrade,
    autoUpgradeToggle,
    
    
    unlock3Card,
    robo3CardPlayerCost, 
    play3CardForYouCost, 
    increase3CardPoints,
    gamesWon3CardIncreased,
    robo3CardPlayerIncreased,
    play3CardForYouIncreased,
    toggle3CardPFY,
    unlockAutoUpgrade3Card,
    autoUpgrade3CardToggle,
  }
}