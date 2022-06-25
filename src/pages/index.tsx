import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from "react"
import Board from "@/components/Board"
import Stats from "@/components/Stats"
import UpgradePage from "@/components/UpgradesPage"
import useUserInfo from "@/hooks/useUserInfo"
import styles from "@/styles/Main.module.css"

const Home: NextPage = () => {
  const [isInfoShown, setIsInfoShown] = useState(true)
  const {
    increasePoints,
    gamesWonIncreased,
    userInfo,
    saveUserInfo,
    savedRecently,
    roboPlayerIncreased,
    playForYouIncreased,
    togglePFY,
    name,
  } = useUserInfo()


  const toggleInfo = () => {
    setIsInfoShown(prevShown => !prevShown)
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
          <Board userInfo={userInfo} increasePoints={increasePoints} gamesWonIncreased={gamesWonIncreased} isInfoShown={isInfoShown} saveUserInfo={saveUserInfo}/>
          <div className={styles.info}>
            <Stats userInfo={userInfo} saveUserInfo={saveUserInfo} savedRecently={savedRecently}/>
            <UpgradePage userInfo={userInfo} roboPlayerIncreased={roboPlayerIncreased} playForYouIncreased={playForYouIncreased} gamesWonIncreased={()=>gamesWonIncreased()} increasePoints={increasePoints} togglePFY={togglePFY} saveUserInfo={saveUserInfo}/>
          </div>
      </main>
    </div>
  )
}

export default Home
