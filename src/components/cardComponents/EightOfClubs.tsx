import EightOfClubsCard from '@/cards/EightOfClubs.svg'

interface EightOfClubsProps {
  id: number;
  onClick: (id: number) => void;
}

const EightOfClubs = (props: EightOfClubsProps) =>{
  return (
    <EightOfClubsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Eight of Clubs"
    />
  )
}

export default EightOfClubs;