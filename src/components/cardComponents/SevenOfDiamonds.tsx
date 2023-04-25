import SevenOfDiamondsCard from '@/cards/SevenOfDiamonds.svg'
import styles from '@/styles/css/Cards.module.css'

interface SevenOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const SevenOfDiamonds = (props: SevenOfDiamondsProps) =>{
  return (
    // <SevenOfDiamondsCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Seven of Diamonds"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.redSeven}>7</div>
      <div />
      <span className={styles.diamond}/>
      <div />
      <div />
      <div />
      <span className={styles.diamond}/>
      <div />
      <div className={styles.redSeven}>7</div>
    </div>
  )
}

export default SevenOfDiamonds;