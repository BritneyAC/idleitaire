import AceOfClubsCard from '@/cards/AceOfClubs.svg'

interface AceOfClubsProps {
  id: number;
  onClick: (id: number) => void;
}

const AceOfClubs = (props: AceOfClubsProps) =>{
  return (
    <AceOfClubsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Ace of Clubs"
    />
  )
}

export default AceOfClubs;