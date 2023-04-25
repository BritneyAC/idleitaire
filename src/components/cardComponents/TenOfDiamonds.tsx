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
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.redTen}>10</div>
      <div />
      <span className={styles.diamond}/>
      <div />
      <div />
      <div />
      <span className={styles.diamond}/>
      <div />
      <div className={styles.redTen}>10</div>
    </div>
  )
}

export default TenOfDiamonds;