import TenOfDiamondsCard from '@/cards/TenOfDiamonds.svg'

interface TenOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const TenOfDiamonds = (props: TenOfDiamondsProps) =>{
  return (
    <TenOfDiamondsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Ten of Diamonds"
    />
  )
}

export default TenOfDiamonds;