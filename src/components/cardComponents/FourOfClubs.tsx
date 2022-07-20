import FourOfClubsCard from '@/cards/FourOfClubs.svg'

interface FourOfClubsProps {
  id: number;
  onClick: (id: number) => void;
}

const FourOfClubs = (props: FourOfClubsProps) =>{
  return (
    <FourOfClubsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true" 
      alt="Four of Clubs"
    />
  )
}

export default FourOfClubs;