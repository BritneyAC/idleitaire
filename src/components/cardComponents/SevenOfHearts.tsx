import SevenOfHeartsCard from '@/cards/SevenOfHearts.svg'

interface SevenOfHeartsProps {
  id: number;
  onClick: (id: number) => void;
}

const SevenOfHearts = (props: SevenOfHeartsProps) =>{
  return (
    <SevenOfHeartsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Seven of Hearts"
    />
  )
}

export default SevenOfHearts;