import styles from "@/styles/css/SelfPromo.module.css"
import { useState } from "react";

interface SelfPromoProps{
  toggleInfoSetting: (tab: string)=>void,
  whichInfoSettingShown: string,
}

export default function SelfPromo(props: SelfPromoProps) {
  const [currentTab, setCurrentTab] = useState("about");

  const changeTab = (newTab: string) => {
    setCurrentTab(newTab);
  }

  const CurrentTabElement = () => {
    if(currentTab === "about"){
      return (
        <div className={styles.tabContent}>
          <div className={styles.setting}>
            <h3>Idleitaire is a weird mix of solitaire and idle game.</h3>
              <h3>Made in typescript-ed react.</h3> 
              <h3>Cards are svgs from openclipart, the rest is either a node dependency</h3>
               <h3>or made by me.</h3>
          </div>
        </div>
      )
    } else if(currentTab === "links"){
      return (
        <div className={styles.tabContent}>
          <div className={styles.setting}>
            <h3><a href="https://github.com/BritneyAC/idleitaire">Github repo</a></h3>
          </div>
        </div>
      )
    }
  }
  
  return (
    <div className={`${styles.menu} ${props.whichInfoSettingShown !== "none" && styles.open} ${props.whichInfoSettingShown === "selfPromo" && styles.shown}`}>
      <div className={styles.tabs}>
        <div className={`${currentTab === "about" && styles.current} ${styles.tab}`} onClick={() => changeTab("about")}>
          <h2>About this game</h2>
        </div>
        <div className={`${currentTab === "links" && styles.current} ${styles.tab}`} onClick={() => changeTab("links")}>
          <h2>Links</h2>
        </div>
      </div>
      {CurrentTabElement()}
    </div>
  )
}