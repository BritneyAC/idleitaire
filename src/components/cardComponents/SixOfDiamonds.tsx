import SixOfDiamondsCard from '@/cards/SixofDiamonds.svg'

interface SixOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const SixOfDiamonds = (props: SixOfDiamondsProps) =>{
  return (
    <SixOfDiamondsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Six of Diamonds"
    />
  )
}

export default SixOfDiamonds;