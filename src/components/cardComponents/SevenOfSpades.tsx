import SevenOfSpadesCard from '@/cards/SevenOfSpades.svg'
import styles from '@/styles/css/Cards.module.css'
import Spade from './Spade';

interface SevenOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const SevenOfSpades = (props: SevenOfSpadesProps) =>{
  return (
    // <SevenOfSpadesCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Seven of Spades"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.blackSeven}>7</div>
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
      <div className={styles.blackSeven}>7</div>
    </div>
  )
}

export default SevenOfSpades;