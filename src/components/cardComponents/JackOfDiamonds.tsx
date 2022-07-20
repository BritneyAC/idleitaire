import JackOfDiamondsCard from '@/cards/JackofDiamonds.svg'

interface JackOfDiamondsProps {
  id: number;
  onClick: (id: number) => void;
}

const JackOfDiamonds = (props: JackOfDiamondsProps) =>{
  return (
    <JackOfDiamondsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Jack of Diamonds"
    />
  )
}

export default JackOfDiamonds;