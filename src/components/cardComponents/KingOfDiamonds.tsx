import KingOfDiamondsCard from '@/cards/KingOfDiamonds.svg'

interface KingOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const KingOfDiamonds = (props: KingOfDiamondsProps) =>{
  return (
    <KingOfDiamondsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="King of Diamonds"
    />
  )
}

export default KingOfDiamonds;