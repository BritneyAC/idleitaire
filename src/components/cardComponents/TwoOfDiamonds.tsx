import TwoOfDiamondsCard from '@/cards/TwoOfDiamonds.svg'

interface TwoOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const TwoOfDiamonds = (props: TwoOfDiamondsProps) =>{
  return (
    <TwoOfDiamondsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Two of Diamonds"
    />
  )
}

export default TwoOfDiamonds;