import SixOfSpadesCard from '@/cards/SixOfSpades.svg'
import styles from '@/styles/css/Cards.module.css'
import Spade from './Spade';

interface SixOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const SixOfSpades = (props: SixOfSpadesProps) =>{
  return (
    // <SixOfSpadesCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Six of Spades"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.blackSix}>6</div>
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
      <div className={styles.blackSix}>6</div>
    </div>
  )
}

export default SixOfSpades;