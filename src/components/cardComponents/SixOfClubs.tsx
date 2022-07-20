import SixOfClubsCard from '@/cards/SixOfClubs.svg'

interface SixOfClubsProps {
  id: number;
  onClick: (id: number) => void;
}

const SixOfClubs = (props: SixOfClubsProps) =>{
  return (
    <SixOfClubsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Six of Clubs"
    />
  )
}

export default SixOfClubs;