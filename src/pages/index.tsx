import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from "react"
import Menu from '@/components/Menu'
import Board from "@/components/Board"
import Stats from "@/components/Stats"
import UpgradePage from "@/components/UpgradesPage"
import useUserInfo from "@/hooks/useUserInfo"
import styles from "@/styles/Main.module.css"

const Home: NextPage = () => {
  const [isInfoShown, setIsInfoShown] = useState(false)  
  const [currentGame, setCurrentGame] = useState("menu")
  const {
    increasePoints,
    gamesWonIncreased,
    increase3CardPoints,
    gamesWon3CardIncreased,
    roboPlayerCost, 
    playForYouCost, 
    robo3CardPlayerCost, 
    play3CardForYouCost, 
    userInfo,
    saveUserInfo,
    savedRecently,
    roboPlayerIncreased,
    playForYouIncreased,
    togglePFY,
    toggle3CardPFY,
    unlock3Card,
    unlockGameCost,
    robo3CardPlayerIncreased,
    play3CardForYouIncreased,
    name,
  } = useUserInfo()

  useEffect(() => {
    if(currentGame === "menu"){
      setIsInfoShown(false)
    }
  }, [currentGame])

  const toggleInfo = () => {
    setIsInfoShown(prevShown => !prevShown)
  }

  const changeCurrentGame = (game: string) => {
    setCurrentGame(game)
    setIsInfoShown(true)
  }

  const boardToShow = () => {
    if(currentGame === "menu"){
      return (
        <Menu userInfo={userInfo} increasePoints={increasePoints} gamesWonIncreased={gamesWonIncreased} saveUserInfo={saveUserInfo} isInfoShown={isInfoShown} unlock3Card={unlock3Card} unlockGameCost={unlockGameCost} currentGame={currentGame} changeCurrentGame={changeCurrentGame}/>
      )
    }
    if(currentGame === "normal"){
      return (
        <Board userInfo={userInfo} increasePoints={increasePoints} gamesWonIncreased={gamesWonIncreased} saveUserInfo={saveUserInfo} isInfoShown={isInfoShown} currentGame={currentGame} changeCurrentGame={changeCurrentGame}/>
      )
    }
    if(currentGame === "3card"){
      return (
        <Board userInfo={userInfo} increasePoints={increase3CardPoints} gamesWonIncreased={gamesWon3CardIncreased} saveUserInfo={saveUserInfo} isInfoShown={isInfoShown} currentGame={currentGame} changeCurrentGame={changeCurrentGame}/>
      )
    }
  }
  const upgradePageToShow = () => {
    if(currentGame === "menu"){
      return null
    }
    if(currentGame === "normal"){
      return (
        <UpgradePage userInfo={userInfo} roboPlayer={userInfo.roboPlayer} playForYou={userInfo.playForYou} roboPlayerCost={roboPlayerCost} playForYouCost={playForYouCost} playForYouToggle={userInfo.playForYouToggle} roboPlayerIncreased={roboPlayerIncreased} playForYouIncreased={playForYouIncreased} gamesWonIncreased={gamesWonIncreased} increasePoints={increasePoints} togglePFY={togglePFY} saveUserInfo={saveUserInfo} currentGame={currentGame}/>
      )
    }
    if(currentGame === "3card"){
      return (
        <UpgradePage userInfo={userInfo} roboPlayer={userInfo.robo3CardPlayer} playForYou={userInfo.play3CardForYou} roboPlayerCost={robo3CardPlayerCost} playForYouCost={play3CardForYouCost} playForYouToggle={userInfo.play3CardForYouToggle} roboPlayerIncreased={robo3CardPlayerIncreased} playForYouIncreased={play3CardForYouIncreased} gamesWonIncreased={gamesWon3CardIncreased} increasePoints={increase3CardPoints} togglePFY={toggle3CardPFY} saveUserInfo={saveUserInfo} currentGame={currentGame}/>
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
        <h3 className={styles.showInfo} data-info-shown={isInfoShown ? "true" : "false"} onClick={toggleInfo}>{isInfoShown ? "hide-info" : "show-info"}</h3>
        <div className={styles.board} data-info-shown={isInfoShown ? "true" : "false"}>
          {boardToShow()}
        </div>
        <div className={styles.info}>
          <Stats userInfo={userInfo} saveUserInfo={saveUserInfo} savedRecently={savedRecently} currentGame={currentGame}/>
          {upgradePageToShow()}
        </div>
      </main>
    </div>
  )
}

export default Home
