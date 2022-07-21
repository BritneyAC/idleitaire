import TenOfSpadesCard from '@/cards/TenOfSpades.svg'

interface TenOfSpadesProps {
  id: number;
  onClick: (id: number) => void;
}

const TenOfSpades = (props: TenOfSpadesProps) =>{
  return (
    <TenOfSpadesCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Ten of Spades"
    />
  )
}

export default TenOfSpades;