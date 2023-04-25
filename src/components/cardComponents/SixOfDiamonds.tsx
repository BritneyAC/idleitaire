import SixOfDiamondsCard from '@/cards/SixOfDiamonds.svg'
import styles from '@/styles/css/Cards.module.css'

interface SixOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const SixOfDiamonds = (props: SixOfDiamondsProps) =>{
  return (
    // <SixOfDiamondsCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Six of Diamonds"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.redSix}>6</div>
      <div />
      <span className={styles.diamond}/>
      <div />
      <div />
      <div />
      <span className={styles.diamond}/>
      <div />
      <div className={styles.redSix}>6</div>
    </div>
  )
}

export default SixOfDiamonds;