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
      onClick={()=>{props.onClick(props.id)}}
      className={styles.card}
      draggable="true"
    >
     <div className={styles.diamond}/>
     <div className={styles.redAce}></div>
     <div className={styles.aceOfdiamonds}/>
    </div>
  )
}

export default AceOfDiamonds;