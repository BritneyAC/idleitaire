import ThreeOfSpadesCard from '@/cards/ThreeOfSpades.svg'

interface ThreeOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const ThreeOfSpades = (props: ThreeOfSpadesProps) =>{
  return (
    <ThreeOfSpadesCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Three of Spades"
    />
  )
}

export default ThreeOfSpades;