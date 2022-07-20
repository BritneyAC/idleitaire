import AceOfDiamondsCard from '@/cards/AceOfDiamonds.svg'

interface AceOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const AceOfDiamonds = (props: AceOfDiamondsProps) =>{
  return (
    <AceOfDiamondsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Ace of Diamonds"
    />
  )
}

export default AceOfDiamonds;