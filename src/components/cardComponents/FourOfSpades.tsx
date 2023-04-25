import FourOfSpadesCard from '@/cards/FourOfSpades.svg'
import styles from '@/styles/css/Cards.module.css'
import Spade from './Spade';

interface FourOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const FourOfSpades = (props: FourOfSpadesProps) =>{
  return (
    // <FourOfSpadesCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Four of Spades"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.blackFour}>4</div>
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
      <div className={styles.blackFour}>4</div>
    </div>
  )
}

export default FourOfSpades;