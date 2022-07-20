import FiveOfSpadesCard from '@/cards/FiveofSpades.svg'

interface FiveOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const FiveOfSpades = (props: FiveOfSpadesProps) =>{
  return (
    <FiveOfSpadesCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Five of Spades"
    />
  )
}

export default FiveOfSpades;