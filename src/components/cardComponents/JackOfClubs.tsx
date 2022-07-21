import JackOfClubsCard from '@/cards/JackOfClubs.svg'

interface JackOfClubsProps {
  id: number;
  onClick: (id: number) => void;
}

const JackOfClubs = (props: JackOfClubsProps) =>{
  return (
    <JackOfClubsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Jack of Clubs"
    />
  )
}

export default JackOfClubs;