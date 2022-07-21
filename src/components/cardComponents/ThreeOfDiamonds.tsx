import ThreeOfDiamondsCard from '@/cards/ThreeOfDiamonds.svg'

interface ThreeOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const ThreeOfDiamonds = (props: ThreeOfDiamondsProps) =>{
  return (
    <ThreeOfDiamondsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Three of Diamonds"
    />
  )
}

export default ThreeOfDiamonds;