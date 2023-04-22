import TenOfDiamondsCard from '@/cards/TenOfDiamonds.svg'
import styles from '@/styles/css/Cards.module.css'

interface TenOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const TenOfDiamonds = (props: TenOfDiamondsProps) =>{
  return (
    // <TenOfDiamondsCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Ten of Diamonds"
    // />
    <div 
      id={`${props.id}`}
      onClick={()=>props.onClick(props.id)}
      className={`${styles.card}`} 
      draggable="true">
        <div className={styles.diamond}/>
        <div className={styles.redTen}></div>
        <div className={styles.tenOfDiamonds}/>
    </div>
  )
}

export default TenOfDiamonds;