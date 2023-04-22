import EightOfDiamondsCard from '@/cards/EightOfDiamonds.svg'
import styles from '@/styles/css/Cards.module.css'

interface EightOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const EightOfDiamonds = (props: EightOfDiamondsProps) =>{
  return (
    // <EightOfDiamondsCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Eight of Diamonds"
    // />
    <div 
      id={`${props.id}`}
      onClick={()=>props.onClick(props.id)}
      className={`${styles.card}`} 
      draggable="true">
        <div className={styles.diamond}/>
        <div className={styles.redEight}></div>
        <div className={styles.EightOfDiamonds}/>
    </div>
  )
}

export default EightOfDiamonds;