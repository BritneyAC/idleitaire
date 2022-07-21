import NineOfDiamondsCard from '@/cards/NineOfDiamonds.svg'

interface NineOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const NineOfDiamonds = (props: NineOfDiamondsProps) =>{
  return (
    <NineOfDiamondsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Nine of Diamonds"
    />
  )
}

export default NineOfDiamonds;