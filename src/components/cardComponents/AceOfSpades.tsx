import AceOfSpadesCard from '@/cards/AceOfSpades.svg'
import styles from '@/styles/css/Cards.module.css'
import Spade from './Spade';

interface AceOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const AceOfSpades = (props: AceOfSpadesProps) =>{
  return (
    // <AceOfSpadesCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Ace of Spades"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.blackAce}>A</div>
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
      <div className={styles.blackAce}>A</div>
    </div>
  )
}

export default AceOfSpades;