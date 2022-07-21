import SevenOfSpadesCard from '@/cards/SevenOfSpades.svg'

interface SevenOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const SevenOfSpades = (props: SevenOfSpadesProps) =>{
  return (
    <SevenOfSpadesCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Seven of Spades"
    />
  )
}

export default SevenOfSpades;