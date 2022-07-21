import KingOfSpadesCard from '@/cards/KingOfSpades.svg'

interface KingOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const KingOfSpades = (props: KingOfSpadesProps) =>{
  return (
    <KingOfSpadesCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="King of Spades"
    />
  )
}

export default KingOfSpades;