import AceOfHeartsCard from '@/cards/AceOfHearts.svg'

interface AceOfHeartsProps {
  id: number;
  onClick: (id: number) => void;
}

const AceOfHearts = (props: AceOfHeartsProps) =>{
  return (
    <AceOfHeartsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Ace of Hearts"
    />
  )
}

export default AceOfHearts;