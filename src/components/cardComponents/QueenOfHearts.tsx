import QueenOfHeartsCard from '@/cards/QueenofHearts.svg'

interface QueenOfHeartsProps {
  id: number;
  onClick: (id: number) => void;
}

const QueenOfHearts = (props: QueenOfHeartsProps) =>{
  return (
    <QueenOfHeartsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Queen of Hearts"
    />
  )
}

export default QueenOfHearts;