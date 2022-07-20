import TwoOfSpadesCard from '@/cards/TwoofSpades.svg'

interface TwoOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const TwoOfSpades = (props: TwoOfSpadesProps) =>{
  return (
    <TwoOfSpadesCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Two of Spades"
    />
  )
}

export default TwoOfSpades;