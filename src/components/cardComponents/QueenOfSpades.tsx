import QueenOfSpadesCard from '@/cards/QueenofSpades.svg'

interface QueenOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const QueenOfSpades = (props: QueenOfSpadesProps) =>{
  return (
    <QueenOfSpadesCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Queen of Spades"
    />
  )
}

export default QueenOfSpades;