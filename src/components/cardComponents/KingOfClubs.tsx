import KingOfClubsCard from '@/cards/KingOfClubs.svg'

interface KingOfClubsProps {
  id: number;
  onClick: (id: number) => void;
}

const KingOfClubs = (props: KingOfClubsProps) =>{
  return (
    <KingOfClubsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="King of Clubs"
    />
  )
}

export default KingOfClubs;