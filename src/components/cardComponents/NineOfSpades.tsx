import NineOfSpadesCard from '@/cards/NineOfSpades.svg'

interface NineOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const NineOfSpades = (props: NineOfSpadesProps) =>{
  return (
    <NineOfSpadesCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Nine of Spades"
    />
  )
}

export default NineOfSpades;