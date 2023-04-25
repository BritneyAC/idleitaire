import EightOfSpadesCard from '@/cards/EightOfSpades.svg'
import styles from '@/styles/css/Cards.module.css'
import Spade from './Spade';

interface EightOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const EightOfSpades = (props: EightOfSpadesProps) =>{
  return (
    // <EightOfSpadesCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Eight of Spades"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.blackEight}>8</div>
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
      <div className={styles.blackEight}>8</div>
    </div>
  )
}

export default EightOfSpades;