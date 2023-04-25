import AceOfDiamondsCard from '@/cards/AceOfDiamonds.svg'
import styles from '@/styles/css/Cards.module.css'

interface AceOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const AceOfDiamonds = (props: AceOfDiamondsProps) =>{
  return (
    // <AceOfDiamondsCard
    //   id={props.id}
    //   onClick={props.onClick}
    //   draggable="true"
    //   alt="Ace of Diamonds"
    // />
    <div
      id={`${props.id}`}
      className={styles.card}
      onClick={()=>props.onClick(props.id)}
      draggable="true"
    >
      <div className={styles.redAce}>A</div>
      <div />
      <span className={styles.diamond}/>
      <div />
      <div />
      <div />
      <span className={styles.diamond}/>
      <div />
      <div className={styles.redAce}>A</div>
    </div>
  )
}

export default AceOfDiamonds;