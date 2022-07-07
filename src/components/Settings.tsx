import { User } from '@/hooks/useUserInfo';
import styles from '@/styles/css/Settings.module.css';
import { useState } from 'react';

interface settingsProps {
  userInfo: User;
  deleteSave: ()=>void;
  whichInfoSettingShown: string;
  toggleInfoSetting: (currentTab: string)=>void;
  autoSaveToggle: () => void;
  priceSettingToggle: () => void;
}

const Settings = (props: settingsProps) => {
  const [currentTab, setCurrentTab] = useState("general");
  const [isConfirmShown, setIsConfirmShown] = useState(false);

  const changeTab = (tab: string) => {
    setCurrentTab(tab);
  }

  const confirmation = () => {
    if(isConfirmShown){
      return (
        <div className={styles.confirmation}>
          <p>Are you sure you want to delete your save?</p>
          <div className={styles.confirmationButtons}>
            
            <button className={styles.smallBtn} 
              onClick={() => {
                props.deleteSave();
                setIsConfirmShown(false);
            }}>Yes</button>

            <button className={styles.smallBtn} 
              onClick={() => setIsConfirmShown(false)}
            >No</button>
          </div>
        </div>
      )
    }
  }


  const currentTabElement = () => {
    if(currentTab === "general"){
      return (
        <div className={styles.tabContent}>
          <div className={styles.setting}>
            <h3>Auto save on win</h3>
            <div className={props.userInfo.autoSave ? styles.radioBtnOn : styles.radioBtnOff} onClick={props.autoSaveToggle}>
              <div className={styles.radioBtnCircle}></div>
            </div>
            <h4>{props.userInfo.autoSave ? "On" : "Off"}</h4>
          </div>
          <div className={styles.setting}>
            <h3>Delete save</h3>
            <div className={styles.btn} onClick={()=>setIsConfirmShown(true)}>
              Delete
            </div>
            {isConfirmShown && confirmation()}
          </div>
        </div>
      )
    } else if(currentTab === "cheats"){
      let pricesBtnPos = styles.radioBtnOff;
      if(props.userInfo.pricesSetting === "normal"){
        pricesBtnPos = styles.radioBtnOff;
      }else if(props.userInfo.pricesSetting === "half"){
        pricesBtnPos = styles.radioBtnHalf;
      }else if(props.userInfo.pricesSetting === "free"){
        pricesBtnPos = styles.radioBtnOn;
      }
      return (
        <div className={styles.tabContent}>
          <div className={styles.setting}>
            <h3>Prices</h3>
            <div className={pricesBtnPos} onClick={props.priceSettingToggle}>
              <div className={styles.radioBtnCircle}></div>
            </div>
            <h4>{props.userInfo.pricesSetting}</h4>
          </div>
        </div>
      )
    }
  }

  return (
    <div className={`${styles.menu} ${props.whichInfoSettingShown !== "none" && styles.open} ${props.whichInfoSettingShown !== "info" && styles.shown}`}>
      <div className={styles.tabs}>
        <div className={`${currentTab === "general" && styles.current} ${styles.tab}`} onClick={() => changeTab("general")}>
          <h2>general</h2>
        </div>
        <div className={`${currentTab === "cheats" && styles.current} ${styles.tab}`} onClick={() => changeTab("cheats")}>
          <h2>cheats</h2>
        </div>
      </div>
      {currentTabElement()}
    </div>
  )
}

export default Settings