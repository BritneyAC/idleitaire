import NineOfHeartsCard from '@/cards/NineofHearts.svg'

interface NineOfHeartsProps {
  id: number;
  onClick: (id: number) => void;
}

const NineOfHearts = (props: NineOfHeartsProps) =>{
  return (
    <NineOfHeartsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Nine of Hearts"
    />
  )
}

export default NineOfHearts;