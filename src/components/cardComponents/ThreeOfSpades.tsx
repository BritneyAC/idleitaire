import ThreeOfSpadesCard from '@/cards/ThreeOfSpades.svg'
import styles from '@/styles/css/Cards.module.css'
import Spade from './Spade';

interface ThreeOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const ThreeOfSpades = (props: ThreeOfSpadesProps) =>{
  return (
    // <ThreeOfSpadesCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Three of Spades"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.blackThree}>3</div>
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
      <div className={styles.blackThree}>3</div>
    </div>
  )
}

export default ThreeOfSpades;