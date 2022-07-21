import JackOfHeartsCard from '@/cards/JackOfHearts.svg'

interface JackOfHeartsProps {
  id: number;
  onClick: (id: number) => void;
}

const JackOfHearts = (props: JackOfHeartsProps) =>{
  return (
    <JackOfHeartsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Jack of Hearts"
    />
  )
}

export default JackOfHearts;