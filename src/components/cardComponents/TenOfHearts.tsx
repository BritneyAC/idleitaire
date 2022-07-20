import TenOfHeartsCard from '@/cards/TenofHearts.svg'

interface TenOfHeartsProps {
  id: number;
  onClick: (id: number) => void;
}

const TenOfHearts = (props: TenOfHeartsProps) =>{
  return (
    <TenOfHeartsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Ten of Hearts"
    />
  )
}

export default TenOfHearts;