import SevenOfClubsCard from '@/cards/SevenOfClubs.svg'

interface SevenOfClubsProps {
  id: number;
  onClick: (id: number) => void;
}

const SevenOfClubs = (props: SevenOfClubsProps) =>{
  return (
    <SevenOfClubsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Seven of Clubs"
    />
  )
}

export default SevenOfClubs;