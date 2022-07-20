import AceOfSpadesCard from '@/cards/AceOfSpades.svg'

interface AceOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const AceOfSpades = (props: AceOfSpadesProps) =>{
  return (
    <AceOfSpadesCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Ace of Spades"
    />
  )
}

export default AceOfSpades;