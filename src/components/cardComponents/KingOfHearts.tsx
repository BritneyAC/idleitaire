import KingOfHeartsCard from '@/cards/KingofHearts.svg'

interface KingOfHeartsProps {
  id: number;
  onClick: (id: number) => void;
}

const KingOfHearts = (props: KingOfHeartsProps) =>{
  return (
    <KingOfHeartsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="King of Hearts"
    />
  )
}

export default KingOfHearts;