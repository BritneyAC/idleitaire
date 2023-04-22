import FourOfDiamondsCard from '@/cards/FourOfDiamonds.svg'
import styles from '@/styles/css/Cards.module.css'

interface FourOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const FourOfDiamonds = (props: FourOfDiamondsProps) =>{
  return (
    // <FourOfDiamondsCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true" 
    //   alt="Four of Diamonds"
    // />
    <div 
      id={`${props.id}`}
      onClick={()=>props.onClick(props.id)}
      className={`${styles.card}`} 
      draggable="true">
        <div className={styles.diamond}/>
        <div className={styles.redFour}/>
        <div className={styles.fourOfDiamonds}/>
    </div>
  )
}

export default FourOfDiamonds;