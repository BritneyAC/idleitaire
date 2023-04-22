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
      onClick={()=>props.onClick(props.id)}
      className={`${styles.card}`} 
      draggable="true">
        <div className={styles.diamond}/>
        <div className={styles.redSeven}></div>
        <div className={styles.sevenOfDiamonds}/>
    </div>
  )
}

export default SevenOfDiamonds;