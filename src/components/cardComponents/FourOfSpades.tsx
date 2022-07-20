import FourOfSpadesCard from '@/cards/FourofSpades.svg'

interface FourOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const FourOfSpades = (props: FourOfSpadesProps) =>{
  return (
    <FourOfSpadesCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Four of Spades"
    />
  )
}

export default FourOfSpades;