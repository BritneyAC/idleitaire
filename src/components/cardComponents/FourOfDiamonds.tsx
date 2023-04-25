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
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.redFour}>4</div>
      <div />
      <span className={styles.diamond}/>
      <div />
      <div />
      <div />
      <span className={styles.diamond}/>
      <div />
      <div className={styles.redFour}>4</div>
    </div>
  )
}

export default FourOfDiamonds;