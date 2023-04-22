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
      onClick={()=>props.onClick(props.id)}
      className={`${styles.card}`} 
      draggable="true">
        <div className={styles.diamond}/>
        <div className={styles.redThree}></div>
        <div className={styles.threeOfDiamonds}/>
    </div>
  )
}

export default ThreeOfDiamonds;