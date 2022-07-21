import FourOfHeartsCard from '@/cards/FourOfHearts.svg'

interface FourOfHeartsProps {
  id: number;
  onClick: (id: number) => void;
}

const FourOfHearts = (props: FourOfHeartsProps) =>{
  return (
    <FourOfHeartsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Four of Hearts"
    />
  )
}

export default FourOfHearts;