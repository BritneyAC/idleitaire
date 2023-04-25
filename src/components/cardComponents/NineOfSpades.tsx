import NineOfSpadesCard from '@/cards/NineOfSpades.svg'
import styles from '@/styles/css/Cards.module.css'
import Spade from './Spade';

interface NineOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const NineOfSpades = (props: NineOfSpadesProps) =>{
  return (
    // <NineOfSpadesCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Nine of Spades"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.blackNine}>9</div>
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
      <div className={styles.blackNine}>9</div>
    </div>
  )
}

export default NineOfSpades;