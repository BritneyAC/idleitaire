import SevenOfDiamondsCard from '@/cards/SevenofDiamonds.svg'

interface SevenOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const SevenOfDiamonds = (props: SevenOfDiamondsProps) =>{
  return (
    <SevenOfDiamondsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Seven of Diamonds"
    />
  )
}

export default SevenOfDiamonds;