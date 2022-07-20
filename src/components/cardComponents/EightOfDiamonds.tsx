import EightOfDiamondsCard from '@/cards/EightofDiamonds.svg'

interface EightOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const EightOfDiamonds = (props: EightOfDiamondsProps) =>{
  return (
    <EightOfDiamondsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Eight of Diamonds"
    />
  )
}

export default EightOfDiamonds;