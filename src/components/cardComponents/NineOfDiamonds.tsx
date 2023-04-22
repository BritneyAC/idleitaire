import NineOfDiamondsCard from '@/cards/NineOfDiamonds.svg'
import styles from '@/styles/css/Cards.module.css'

interface NineOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const NineOfDiamonds = (props: NineOfDiamondsProps) =>{
  return (
    // <NineOfDiamondsCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Nine of Diamonds"
    // />
    <div 
      id={`${props.id}`}
      onClick={()=>props.onClick(props.id)}
      className={`${styles.card}`} 
      draggable="true">
        <div className={styles.diamond}/>
        <div className={styles.redNine}></div>
        <div className={styles.nineOfDiamonds}/>
    </div>
  )
}

export default NineOfDiamonds;