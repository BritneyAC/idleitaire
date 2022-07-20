import QueenOfClubsCard from '@/cards/QueenofClubs.svg'

interface QueenOfClubsProps {
  id: number;
  onClick: (id: number) => void;
}

const QueenOfClubs = (props: QueenOfClubsProps) =>{
  return (
    <QueenOfClubsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Queen of Clubs"
    />
  )
}

export default QueenOfClubs;