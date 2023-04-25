import TenOfSpadesCard from '@/cards/TenOfSpades.svg'
import styles from '@/styles/css/Cards.module.css'
import Spade from './Spade';

interface TenOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const TenOfSpades = (props: TenOfSpadesProps) =>{
  return (
    // <TenOfSpadesCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Ten of Spades"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.blackTen}>10</div>
      <div />
      <div className={styles.topSuit}>
        <Spade/>
      </div>
      <div />
      <div />
      <div />
      <div className={styles.bottomSuit}>
        <Spade/>
      </div>
      <div />
      <div className={styles.blackTen}>10</div>
    </div>
  )
}

export default TenOfSpades;