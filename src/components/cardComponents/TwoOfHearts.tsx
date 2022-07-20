import TwoOfHeartsCard from '@/cards/TwoofHearts.svg'

interface TwoOfHeartsProps {
  id: number;
  onClick: (id: number) => void;
}

const TwoOfHearts = (props: TwoOfHeartsProps) =>{
  return (
    <TwoOfHeartsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Two of Hearts"
    />
  )
}

export default TwoOfHearts;