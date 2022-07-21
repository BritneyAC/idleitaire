import ThreeOfClubsCard from '@/cards/ThreeOfClubs.svg'

interface ThreeOfClubsProps {
  id: number;
  onClick: (id: number) => void;
}

const ThreeOfClubs = (props: ThreeOfClubsProps) =>{
  return (
    <ThreeOfClubsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Three of Clubs"
    />
  )
}

export default ThreeOfClubs;