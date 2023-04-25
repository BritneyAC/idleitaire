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
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.redNine}>9</div>
      <div />
      <span className={styles.diamond}/>
      <div />
      <div />
      <div />
      <span className={styles.diamond}/>
      <div />
      <div className={styles.redNine}>9</div>
    </div>
  )
}

export default NineOfDiamonds;