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
      onClick={()=>props.onClick(props.id)}
      className={`${styles.card}`} 
      draggable="true">
        <div className={styles.diamond}/>
        <div className={styles.redSix}></div>
        <div className={styles.sixOfDiamonds}/>
    </div>
  )
}

export default SixOfDiamonds;