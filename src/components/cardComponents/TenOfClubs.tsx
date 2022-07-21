import TenOfClubsCard from '@/cards/TenOfClubs.svg'

interface TenOfClubsProps {
  id: number;
  onClick: (id: number) => void;
}

const TenOfClubs = (props: TenOfClubsProps) =>{
  return (
    <TenOfClubsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Ten of Clubs"
    />
  )
}

export default TenOfClubs;