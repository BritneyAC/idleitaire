import ThreeOfHeartsCard from '@/cards/ThreeOfHearts.svg'

interface ThreeOfHeartsProps {
  id: number;
  onClick: (id: number) => void;
}

const ThreeOfHearts = (props: ThreeOfHeartsProps) =>{
  return (
    <ThreeOfHeartsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Three of Hearts"
    />
  )
}

export default ThreeOfHearts;