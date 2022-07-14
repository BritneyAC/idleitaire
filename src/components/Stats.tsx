import type {User} from "@/hooks/useUserInfo"
import styles from "@/styles/css/Stats.module.css"

interface StatsProps {
  userInfo: User,
  saveUserInfo: ()=>void,
  savedRecently: boolean,
  currentGame: string,
}

const Stats: React.FC<StatsProps> = (props) => {
  const StatsToShow = () => {
    if(props.currentGame === "menu"){
      return (
        <>
        <p>Games won: {props.userInfo.gamesWon + props.userInfo.games3CardWon}</p>
        <p>Total points: {props.userInfo.userPoints + props.userInfo.user3CardPoints}</p>
        </>
      )
    }else if(props.currentGame === "normal"){
      return (
        <>
          <p>Games won: {props.userInfo.gamesWon}</p>
          <p>Total points: {props.userInfo.userPoints}</p>
        </>
      )
    }else if(props.currentGame === "3card"){
      return(
        <>
          <p>Games won: {props.userInfo.games3CardWon}</p>
          <p>Total points: {props.userInfo.user3CardPoints}</p>
        </>
      )
    }else {
      return (
        <>
          <p>Games won: {props.userInfo.gamesWon + props.userInfo.games3CardWon}</p>
          <p>Total points: {props.userInfo.userPoints + props.userInfo.user3CardPoints}</p>
        </>
      )
    }
    
  }
  return(
    <div className={styles.stats}>
      <StatsToShow/>
      <div onClick={props.saveUserInfo} className={styles.btn}>Save Info?</div>
      {props.savedRecently && <p className={styles.saveMarker}>  Saved!</p>}
    </div>
  )
}

export default Stats