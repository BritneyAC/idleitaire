import EightOfSpadesCard from '@/cards/EightOfSpades.svg'

interface EightOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const EightOfSpades = (props: EightOfSpadesProps) =>{
  return (
    <EightOfSpadesCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Eight of Spades"
    />
  )
}

export default EightOfSpades;