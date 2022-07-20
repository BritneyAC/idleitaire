import JackOfSpadesCard from '@/cards/JackofSpades.svg'

interface JackOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const JackOfSpades = (props: JackOfSpadesProps) =>{
  return (
    <JackOfSpadesCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Jack of Spades"
    />
  )
}

export default JackOfSpades;