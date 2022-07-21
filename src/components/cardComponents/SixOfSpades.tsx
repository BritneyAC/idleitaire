import SixOfSpadesCard from '@/cards/SixOfSpades.svg'

interface SixOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const SixOfSpades = (props: SixOfSpadesProps) =>{
  return (
    <SixOfSpadesCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Six of Spades"
    />
  )
}

export default SixOfSpades;