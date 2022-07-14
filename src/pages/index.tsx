import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from "react"
import styles from "@/styles/css/Main.module.css"
import dynamic from 'next/dynamic'

const Menu = dynamic(()=>import("@/components/Menu"))
const Board = dynamic(()=>import("@/components/Board"))
import useUserInfo from "@/hooks/useUserInfo"
import Settings from '@/components/Settings'
import Info from '@/components/Info'


const Home: NextPage = () => {
  const [whichInfoSettingShown, setWhichInfoSettingShown] = useState("settings")  
  const [currentGame, setCurrentGame] = useState("menu")
  const toggleInfoSetting = (currentTab: string) => {
    if(whichInfoSettingShown === "none"){
      setWhichInfoSettingShown(currentTab)
    }else if(currentTab === whichInfoSettingShown){
      setWhichInfoSettingShown("none") 
    } else {
      setWhichInfoSettingShown(currentTab)
    }
  }
  const {
    userInfo,
    saveUserInfo,
    autoSaveToggle,
    priceSettingToggle,
    unlockGameCost,
    savedRecently,
    deleteSave,
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
    increase3CardPoints,
    gamesWon3CardIncreased,
    robo3CardPlayerCost, 
    play3CardForYouCost, 
    robo3CardPlayerIncreased,
    play3CardForYouIncreased,
    toggle3CardPFY,
    unlockAutoUpgrade3Card,
    autoUpgrade3CardToggle,
  } = useUserInfo({toggleInfoSetting, currentGame})

  useEffect(() => {
    if(currentGame === "menu"){
      if(userInfo.timeOfSave > 0){
        toggleInfoSetting("none")
      }
    }
  }, [])

  const infoTabTitle = () => {
    if(whichInfoSettingShown === "info"){
      return"Close"
    } else if(name === "Upgrade Available"){
      return"Upgrade Available"
    }
    return "Info"
  }

  

  const changeCurrentGame = (game: string) => {
    setCurrentGame(game)
    
    game !== "menu" && toggleInfoSetting("info")
  }

  const BoardToShow = () => {
    if(currentGame === "menu"){
      return (
        <Menu userInfo={userInfo} roboPlayer={userInfo.roboPlayer} playForYou={userInfo.playForYou} playForYouToggle={userInfo.playForYouToggle}  increasePoints={increasePoints} gamesWonIncreased={gamesWonIncreased} saveUserInfo={saveUserInfo} unlock3Card={unlock3Card} unlockGameCost={unlockGameCost} currentGame={currentGame} changeCurrentGame={changeCurrentGame}/>
      )
    }else if(currentGame === "normal"){
      return (
        <Board userInfo={userInfo} roboPlayer={userInfo.roboPlayer} playForYou={userInfo.playForYou} playForYouToggle={userInfo.playForYouToggle}  increasePoints={increasePoints} gamesWonIncreased={gamesWonIncreased} saveUserInfo={saveUserInfo} currentGame={currentGame} changeCurrentGame={changeCurrentGame} whichInfoSettingShown={whichInfoSettingShown} toggleInfoSetting={toggleInfoSetting}/>
      )
    }else if(currentGame === "3card"){
      return (
        <Board userInfo={userInfo} roboPlayer={userInfo.robo3CardPlayer} playForYou={userInfo.play3CardForYou} playForYouToggle={userInfo.play3CardForYouToggle}  increasePoints={increase3CardPoints} gamesWonIncreased={gamesWon3CardIncreased} saveUserInfo={saveUserInfo} currentGame={currentGame} changeCurrentGame={changeCurrentGame} whichInfoSettingShown={whichInfoSettingShown} toggleInfoSetting={toggleInfoSetting}/>
        )
      }
    else{
      return (
        <Menu userInfo={userInfo} roboPlayer={userInfo.roboPlayer} playForYou={userInfo.playForYou} playForYouToggle={userInfo.playForYouToggle}  increasePoints={increasePoints} gamesWonIncreased={gamesWonIncreased} saveUserInfo={saveUserInfo} unlock3Card={unlock3Card} unlockGameCost={unlockGameCost} currentGame={currentGame} changeCurrentGame={changeCurrentGame}/>
      )
    }
  }
  const InfoPageToShow = () => {
    if(currentGame === "menu"){
      return (
        <Info userInfo={userInfo} points={userInfo.userPoints + userInfo.user3CardPoints} saveUserInfo={saveUserInfo} savedRecently={savedRecently} currentGame={currentGame} whichInfoSettingShown={whichInfoSettingShown} toggleInfoSetting={toggleInfoSetting} unlockGameCost={unlockGameCost} roboPlayer={userInfo.roboPlayer} playForYou={userInfo.playForYou} roboPlayerCost={roboPlayerCost} playForYouCost={playForYouCost} playForYouToggle={userInfo.playForYouToggle} roboPlayerIncreased={roboPlayerIncreased} playForYouIncreased={playForYouIncreased} gamesWonIncreased={gamesWonIncreased} increasePoints={increasePoints} togglePFY={togglePFY} autoUpgradeUnlocked={userInfo.autoUpgradeUnlocked} unlockAutoUpgrade={unlockAutoUpgrade} autoUpgradeToggle={autoUpgradeToggle} autoUpgrade={userInfo.autoUpgrade}/>
      )
    }else if(currentGame === "normal"){
      return (
        <Info userInfo={userInfo} points={userInfo.userPoints} saveUserInfo={saveUserInfo} savedRecently={savedRecently} currentGame={currentGame} whichInfoSettingShown={whichInfoSettingShown} toggleInfoSetting={toggleInfoSetting} unlockGameCost={unlockGameCost} roboPlayer={userInfo.roboPlayer} playForYou={userInfo.playForYou} roboPlayerCost={roboPlayerCost} playForYouCost={playForYouCost} playForYouToggle={userInfo.playForYouToggle} roboPlayerIncreased={roboPlayerIncreased} playForYouIncreased={playForYouIncreased} gamesWonIncreased={gamesWonIncreased} increasePoints={increasePoints} togglePFY={togglePFY} autoUpgradeUnlocked={userInfo.autoUpgradeUnlocked} unlockAutoUpgrade={unlockAutoUpgrade} autoUpgradeToggle={autoUpgradeToggle} autoUpgrade={userInfo.autoUpgrade}/>
      )
    }else if(currentGame === "3card"){
      return (
        <Info userInfo={userInfo} points={userInfo.user3CardPoints} saveUserInfo={saveUserInfo} savedRecently={savedRecently} currentGame={currentGame} whichInfoSettingShown={whichInfoSettingShown} toggleInfoSetting={toggleInfoSetting} unlockGameCost={unlockGameCost} roboPlayer={userInfo.robo3CardPlayer} playForYou={userInfo.play3CardForYou} roboPlayerCost={robo3CardPlayerCost} playForYouCost={play3CardForYouCost} playForYouToggle={userInfo.play3CardForYouToggle} roboPlayerIncreased={robo3CardPlayerIncreased} playForYouIncreased={play3CardForYouIncreased} gamesWonIncreased={gamesWon3CardIncreased} increasePoints={increase3CardPoints} togglePFY={toggle3CardPFY} autoUpgradeUnlocked={userInfo.autoUpgrade3CardUnlocked} unlockAutoUpgrade={unlockAutoUpgrade3Card} autoUpgradeToggle={autoUpgrade3CardToggle} autoUpgrade={userInfo.autoUpgrade3Card}/>
        )
    }else{
       return (
        <Info userInfo={userInfo} points={userInfo.userPoints + userInfo.user3CardPoints} saveUserInfo={saveUserInfo} savedRecently={savedRecently} currentGame={currentGame} whichInfoSettingShown={whichInfoSettingShown} toggleInfoSetting={toggleInfoSetting} unlockGameCost={unlockGameCost} roboPlayer={userInfo.roboPlayer} playForYou={userInfo.playForYou} roboPlayerCost={roboPlayerCost} playForYouCost={playForYouCost} playForYouToggle={userInfo.playForYouToggle} roboPlayerIncreased={roboPlayerIncreased} playForYouIncreased={playForYouIncreased} gamesWonIncreased={gamesWonIncreased} increasePoints={increasePoints} togglePFY={togglePFY} autoUpgradeUnlocked={userInfo.autoUpgradeUnlocked} unlockAutoUpgrade={unlockAutoUpgrade} autoUpgradeToggle={autoUpgradeToggle} autoUpgrade={userInfo.autoUpgrade}/>
      )
    }
  }

  return (
    <div className={styles.app}>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content="Idleitaire is a version of solitaire turned into an idle game.
          Play solitaire, buy upgrades, have solitaire play itself"
        />
        <link rel="icon" href="14.svg" />
      </Head>

      
      <main className={styles.main}>
        {whichInfoSettingShown !== "none" && <div className={styles.closeInfoSettings} onClick={()=>toggleInfoSetting("none")}></div>}
        <div className={styles.board}>
          {BoardToShow()}
        </div>
        <div className={`${styles.infoSettingsTabs} ${whichInfoSettingShown !== "none" && styles.open}`}>
          <h1 className={`${styles.header} ${whichInfoSettingShown === "info" && styles.current} ${whichInfoSettingShown !== "info" && name === "Upgrade Available" && styles.upgradeNotif}`}  onClick={()=>{toggleInfoSetting("info")}}>{infoTabTitle()}</h1>
          <h1 className={`${styles.header} ${whichInfoSettingShown === "settings" && styles.current}`}  onClick={()=>{toggleInfoSetting("settings")}}>{whichInfoSettingShown === "settings" ? "Close" : "Settings"}</h1>
        </div>
        <div className={`${styles.menus} ${whichInfoSettingShown !== "none" && styles.open}`}>
          {InfoPageToShow()}
          <Settings userInfo={userInfo} deleteSave={deleteSave} whichInfoSettingShown={whichInfoSettingShown} toggleInfoSetting={toggleInfoSetting} autoSaveToggle={autoSaveToggle} priceSettingToggle={priceSettingToggle}/>
        </div>
      </main>
    </div>
  )
}

export default Home
