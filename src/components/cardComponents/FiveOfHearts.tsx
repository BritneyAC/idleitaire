import FiveOfHeartsCard from '@/cards/FiveOfHearts.svg'

interface FiveOfHeartsProps {
  id: number;
  onClick: (id: number) => void;
}

const FiveOfHearts = (props: FiveOfHeartsProps) =>{
  return (
    <FiveOfHeartsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Five of Hearts"
    />
  )
}

export default FiveOfHearts;