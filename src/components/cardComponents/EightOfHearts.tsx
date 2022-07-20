import EightOfHeartsCard from '@/cards/EightofHearts.svg'

interface EightOfHeartsProps {
  id: number;
  onClick: (id: number) => void;
}

const EightOfHearts = (props: EightOfHeartsProps) =>{
  return (
    <EightOfHeartsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Eight of Hearts"
    />
  )
}

export default EightOfHearts;