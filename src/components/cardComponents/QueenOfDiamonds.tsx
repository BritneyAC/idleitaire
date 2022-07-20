import QueenOfDiamondsCard from '@/cards/QueenofDiamonds.svg'

interface QueenOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const QueenOfDiamonds = (props: QueenOfDiamondsProps) =>{
  return (
    <QueenOfDiamondsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Queen of Diamonds"
    />
  )
}

export default QueenOfDiamonds;