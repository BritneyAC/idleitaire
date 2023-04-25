import FiveOfDiamondsCard from '@/cards/FiveOfDiamonds.svg'
import styles from "@/styles/css/Cards.module.css"

interface FiveOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const FiveOfDiamonds = (props: FiveOfDiamondsProps) =>{
  return (
    // <FiveOfDiamondsCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Five of Diamonds"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.redFive}>5</div>
      <div />
      <span className={styles.diamond}/>
      <div />
      <div />
      <div />
      <span className={styles.diamond}/>
      <div />
      <div className={styles.redFive}>5</div>
    </div>
  )
}

export default FiveOfDiamonds;