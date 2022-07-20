import FiveOfDiamondsCard from '@/cards/FiveofDiamonds.svg'

interface FiveOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const FiveOfDiamonds = (props: FiveOfDiamondsProps) =>{
  return (
    <FiveOfDiamondsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Five of Diamonds"
    />
  )
}

export default FiveOfDiamonds;