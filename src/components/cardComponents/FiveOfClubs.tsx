import FiveOfClubsCard from '@/cards/FiveOfClubs.svg'

interface FiveOfClubsProps {
  id: number;
  onClick: (id: number) => void;
}

const FiveOfClubs = (props: FiveOfClubsProps) =>{
  return (
    <FiveOfClubsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Five of Clubs"
    />
  )
}

export default FiveOfClubs;