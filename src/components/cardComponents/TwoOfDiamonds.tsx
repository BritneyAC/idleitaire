import TwoOfDiamondsCard from '@/cards/TwoOfDiamonds.svg'
import styles from '@/styles/css/Cards.module.css'

interface TwoOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const TwoOfDiamonds = (props: TwoOfDiamondsProps) =>{
  return (
    // <TwoOfDiamondsCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Two of Diamonds"
    // />
    <div 
      id={`${props.id}`}
      onClick={()=>props.onClick(props.id)}
      className={`${styles.card}`} 
      draggable="true">
        <div className={styles.diamond}/>
        <div className={styles.redTwo}></div>
        <div className={styles.twoOfDiamonds}/>
    </div>
  )
}

export default TwoOfDiamonds;