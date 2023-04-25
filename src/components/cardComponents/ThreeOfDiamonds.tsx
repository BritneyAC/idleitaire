import ThreeOfDiamondsCard from '@/cards/ThreeOfDiamonds.svg'
import styles from '@/styles/css/Cards.module.css'

interface ThreeOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const ThreeOfDiamonds = (props: ThreeOfDiamondsProps) =>{
  return (
    // <ThreeOfDiamondsCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Three of Diamonds"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.redThree}>3</div>
      <div />
      <span className={styles.diamond}/>
      <div />
      <div />
      <div />
      <span className={styles.diamond}/>
      <div />
      <div className={styles.redThree}>3</div>
    </div>
  )
}

export default ThreeOfDiamonds;