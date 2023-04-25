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
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.redEight}>8</div>
      <div />
      <span className={styles.diamond}/>
      <div />
      <div />
      <div />
      <span className={styles.diamond}/>
      <div />
      <div className={styles.redEight}>8</div>
    </div>
  )
}

export default EightOfDiamonds;