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
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.redTwo}>2</div>
      <div />
      <span className={styles.diamond}/>
      <div />
      <div />
      <div />
      <span className={styles.diamond}/>
      <div />
      <div className={styles.redTwo}>2</div>
    </div>
  )
}

export default TwoOfDiamonds;