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
      onClick={()=>props.onClick(props.id)}
      className={`${styles.card}`} 
      draggable="true">
        <div className={styles.diamond}/>
        <div className={styles.redFive}></div>
        <div className={styles.fiveOfDiamonds}/>
    </div>
  )
}

export default FiveOfDiamonds;