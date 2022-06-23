import type {User} from "@/hooks/useUserInfo"
import styles from "@/styles/Stats.module.css"
import { useUser } from "@auth0/nextjs-auth0"

interface StatsProps {
  userInfo: User,
  saveUserInfo: ()=>void,
  savedRecently: boolean
}

const Stats: React.FC<StatsProps> = (props) => {
  const {gamesWon, userPoints} = props.userInfo

  return(
    <div className={styles.stats}>
      <h1>Stats</h1>
      <p>Games won: {props.userInfo.gamesWon}</p>
      <p>Total points: {props.userInfo.userPoints}</p>
      <button onClick={props.saveUserInfo}>Save Info?</button>
      {props.savedRecently && <p className={styles.saveMarker}>  Saved!</p>}
    </div>
  )
}

export default Stats