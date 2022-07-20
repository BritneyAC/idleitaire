import FourOfDiamondsCard from '@/cards/FourofDiamonds.svg'

interface FourOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const FourOfDiamonds = (props: FourOfDiamondsProps) =>{
  return (
    <FourOfDiamondsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true" 
      alt="Four of Diamonds"
    />
  )
}

export default FourOfDiamonds;