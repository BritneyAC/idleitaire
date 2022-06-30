import { User } from '@/hooks/useUserInfo';
import styles from '@/styles/Info.module.css';
import { useEffect, useState } from 'react';
import Stats from '@/components/Stats';
import UpgradesPage from '@/components/UpgradesPage';

interface infoProps {
  userInfo: User;
  points: number;
  currentGame: string,
  unlockGameCost: number,
  savedRecently: boolean,
  whichInfoSettingShown: string,
  toggleInfoSetting: (currentTab: string)=>void,

  gamesWonIncreased: ()=>void,
  increasePoints: (points: number)=>void,
  saveUserInfo: ()=>void,
  playForYou: number,
  roboPlayer: number,
  playForYouToggle: boolean,
  roboPlayerCost: number,
  playForYouCost: number,
  roboPlayerIncreased: ()=>void,
  playForYouIncreased: ()=>void,
  togglePFY: ()=>void,
  unlockAutoUpgrade: ()=>void,
  autoUpgradeUnlocked: boolean,
  autoUpgradeToggle: ()=>void,
  autoUpgrade: boolean,
}

const Info = (props: infoProps) => {
  const [currentTab, setCurrentTab] = useState("stats");

  const {
    userInfo,
    points,
    unlockGameCost,
    gamesWonIncreased,
    increasePoints,
    saveUserInfo,
    currentGame,
    savedRecently,
    whichInfoSettingShown,
    toggleInfoSetting,

    roboPlayer,
    playForYou,
    playForYouToggle,
    autoUpgradeUnlocked,
    autoUpgrade,
    roboPlayerIncreased, 
    playForYouIncreased, 
    togglePFY, 
    roboPlayerCost, 
    playForYouCost,
    unlockAutoUpgrade,
    autoUpgradeToggle,
  } = props

  const changeTab = (tab: string) => {
    setCurrentTab(tab);
  }
  const currentTabElement = () => {
    if(currentTab === "stats"){
      return (
        <Stats userInfo={userInfo} saveUserInfo={saveUserInfo} savedRecently={savedRecently} currentGame={currentGame}/>
      )
    } else if(currentTab === "upgrades"){
      if(currentGame === "menu"){
        return null
      }
      return (
        <UpgradesPage userInfo={userInfo} unlockGameCost={unlockGameCost} roboPlayer={roboPlayer} playForYou={playForYou} roboPlayerCost={roboPlayerCost} playForYouCost={playForYouCost} playForYouToggle={playForYouToggle} roboPlayerIncreased={roboPlayerIncreased} playForYouIncreased={playForYouIncreased} gamesWonIncreased={gamesWonIncreased} increasePoints={increasePoints} togglePFY={togglePFY} autoUpgradeUnlocked={autoUpgradeUnlocked} unlockAutoUpgrade={unlockAutoUpgrade} autoUpgradeToggle={autoUpgradeToggle} autoUpgrade={autoUpgrade} saveUserInfo={saveUserInfo} currentGame={currentGame}/>
      )     
    }
  }

  useEffect(() => {
    if(currentGame === "menu"){
      changeTab("stats")
    } else{
      changeTab("upgrades")
    }
  }, [props.currentGame])

  return (
    <div className={`${styles.info} ${whichInfoSettingShown !== "none" && styles.open} ${props.whichInfoSettingShown !== "settings" && styles.shown}`}>
      <div className={styles.tabs} data-game={currentGame}>
        <div className={`${currentTab === "upgrades" && styles.tabCurrent} ${styles.tab}`} onClick={() => (changeTab("upgrades"))}>
          <h2>Upgrade</h2>
        </div>
        <div className={`${currentTab === "stats" && styles.tabCurrent} ${styles.tab}`} onClick={() => (changeTab("stats"))}>
          <h2>Stats(points: {points})</h2>
        </div>
      </div>
      <div className={styles.tabContent}>
        {currentTabElement()}
      </div>
    </div>
  )
}

export default Info