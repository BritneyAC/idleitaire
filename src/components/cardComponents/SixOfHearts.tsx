import SixOfHeartsCard from '@/cards/SixOfHearts.svg'

interface SixOfHeartsProps {
  id: number;
  onClick: (id: number) => void;
}

const SixOfHearts = (props: SixOfHeartsProps) =>{
  return (
    <SixOfHeartsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Six of Hearts"
    />
  )
}

export default SixOfHearts;