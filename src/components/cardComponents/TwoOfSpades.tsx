import TwoOfSpadesCard from '@/cards/TwoOfSpades.svg'
import styles from '@/styles/css/Cards.module.css'
import Spade from './Spade';

interface TwoOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const TwoOfSpades = (props: TwoOfSpadesProps) =>{
  return (
    // <TwoOfSpadesCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Two of Spades"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.blackTwo}>2</div>
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
      <div className={styles.blackTwo}>2</div>
    </div>
  )
}

export default TwoOfSpades;