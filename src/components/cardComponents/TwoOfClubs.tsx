import TwoOfClubsCard from '@/cards/TwoOfClubs.svg'

interface TwoOfClubsProps {
  id: number;
  onClick: (id: number) => void;
}

const TwoOfClubs = (props: TwoOfClubsProps) =>{
  return (
    <TwoOfClubsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Two of Clubs"
    />
  )
}

export default TwoOfClubs;