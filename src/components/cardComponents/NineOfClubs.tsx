import NineOfClubsCard from '@/cards/NineOfClubs.svg'

interface NineOfClubsProps {
  id: number;
  onClick: (id: number) => void;
}

const NineOfClubs = (props: NineOfClubsProps) =>{
  return (
    <NineOfClubsCard
      id={props.id}
      onClick={props.onClick}
      draggable="true"
      alt="Nine of Clubs"
    />
  )
}

export default NineOfClubs;