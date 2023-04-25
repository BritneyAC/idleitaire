import FiveOfSpadesCard from '@/cards/FiveOfSpades.svg'
import styles from '@/styles/css/Cards.module.css'
import Spade from './Spade';

interface FiveOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const FiveOfSpades = (props: FiveOfSpadesProps) =>{
  return (
    // <FiveOfSpadesCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Five of Spades"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.blackFive}>5</div>
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
      <div className={styles.blackFive}>5</div>
    </div>
  )
}

export default FiveOfSpades;