import useGameLogic, { card } from "./useGameLogic"
import { User } from "./useUserInfo"
import styles from "@/styles/css/BoardElement.module.css"


import AceOfClubs from "@/components/cardComponents/AceOfClubs"
import TwoOfClubs from "@/components/cardComponents/TwoOfClubs"
import ThreeOfClubs from "@/components/cardComponents/AceOfClubs"
import FourOfClubs from "@/components/cardComponents/AceOfClubs"
import FiveOfClubs from "@/components/cardComponents/AceOfClubs"
import SixOfClubs from "@/components/cardComponents/AceOfClubs"
import SevenOfClubs from "@/components/cardComponents/SevenOfClubs"
import EightOfClubs from "@/components/cardComponents/EightOfClubs"
import NineOfClubs from "@/components/cardComponents/NineOfClubs"
import TenOfClubs from "@/components/cardComponents/TenOfClubs"
import JackOfClubs from "@/components/cardComponents/JackOfClubs"
import QueenOfClubs from "@/components/cardComponents/QueenOfClubs"
import KingOfClubs from "@/components/cardComponents/KingOfClubs"
import AceOfSpades from "@/components/cardComponents/AceOfSpades"
import TwoOfSpades from "@/components/cardComponents/TwoOfSpades"
import ThreeOfSpades from "@/components/cardComponents/ThreeOfSpades"
import FourOfSpades from "@/components/cardComponents/FourOfSpades"
import FiveOfSpades from "@/components/cardComponents/FiveOfSpades"
import SixOfSpades from "@/components/cardComponents/SixOfSpades"
import SevenOfSpades from "@/components/cardComponents/SevenOfSpades"
import EightOfSpades from "@/components/cardComponents/EightOfSpades"
import NineOfSpades from "@/components/cardComponents/NineOfSpades"
import TenOfSpades from "@/components/cardComponents/TenOfSpades"
import JackOfSpades from "@/components/cardComponents/JackOfSpades"
import QueenOfSpades from "@/components/cardComponents/QueenOfSpades"
import KingOfSpades from "@/components/cardComponents/KingOfSpades"
import AceOfHearts from "@/components/cardComponents/AceOfHearts"
import TwoOfHearts from "@/components/cardComponents/TwoOfHearts"
import ThreeOfHearts from "@/components/cardComponents/ThreeOfHearts"
import FourOfHearts from "@/components/cardComponents/FourOfHearts"
import FiveOfHearts from "@/components/cardComponents/FiveOfHearts"
import SixOfHearts from "@/components/cardComponents/SixOfHearts"
import SevenOfHearts from "@/components/cardComponents/SevenOfHearts"
import EightOfHearts from "@/components/cardComponents/EightOfHearts"
import NineOfHearts from "@/components/cardComponents/NineOfHearts"
import TenOfHearts from "@/components/cardComponents/TenOfHearts"
import JackOfHearts from "@/components/cardComponents/JackOfHearts"
import QueenOfHearts from "@/components/cardComponents/QueenOfHearts"
import KingOfHearts from "@/components/cardComponents/KingOfHearts"
import AceOfDiamonds from "@/components/cardComponents/AceOfDiamonds"
import TwoOfDiamonds from "@/components/cardComponents/TwoOfDiamonds"
import ThreeOfDiamonds from "@/components/cardComponents/ThreeOfDiamonds"
import FourOfDiamonds from "@/components/cardComponents/FourOfDiamonds"
import FiveOfDiamonds from "@/components/cardComponents/FiveOfDiamonds"
import SixOfDiamonds from "@/components/cardComponents/SixOfDiamonds"
import SevenOfDiamonds from "@/components/cardComponents/SevenOfDiamonds"
import EightOfDiamonds from "@/components/cardComponents/EightOfDiamonds"
import NineOfDiamonds from "@/components/cardComponents/NineOfDiamonds"
import TenOfDiamonds from "@/components/cardComponents/TenOfDiamonds"
import JackOfDiamonds from "@/components/cardComponents/JackOfDiamonds"
import QueenOfDiamonds from "@/components/cardComponents/QueenOfDiamonds"
import KingOfDiamonds from "@/components/cardComponents/KingOfDiamonds"

interface UseMenuElementsProps {
  gamesWonIncreased: ()=>void,
  increasePoints: (points: number)=>void,
  saveUserInfo: ()=>void,
  userInfo: User,
  currentGame: string,
  playForYou: number,
  roboPlayer: number,
  playForYouToggle: boolean,
  changeCurrentGame: (game: string)=>void,
}

const useMenuElements= (props: UseMenuElementsProps) => {
  const {deck, 
    gameCards, 
    searchPlaceable,
    undoMove,
    isGameRunning,
    RestartGame,
    StartGame,
    EndGame,
    gameType,
    gamePoints,
    removeFromPile,
    setGameCards,
    prevClicked,
    setPrevClicked,
    prevClickedCount,
    setPrevClickedCount,
  } = useGameLogic({...props, roboGame: false})


const randomCardElement = (amount: number) => {
  const cardMaker = (C: number, style: string) => {
    
    let element;
    if(C === 1){
      element = <AceOfClubs
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 2){
    element = <TwoOfClubs
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 3){
    element = <ThreeOfClubs
      id={C}
        onClick={()=>{}}
      />
    }else if(C === 4){
      element = <FourOfClubs
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 5){
    element = <FiveOfClubs
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 6){
    element = <SixOfClubs
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 7){
    element = <SevenOfClubs
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 8){
    element = <EightOfClubs
      id={C}
        onClick={()=>{}}
      />
  }else if(C === 9){
    element = <NineOfClubs
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 10){
    element = <TenOfClubs
    id={C}
        onClick={()=>{}}
    />
  }else if(C === 11){
    element = <JackOfClubs
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 12){
    element = <QueenOfClubs
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 13){
    element = <KingOfClubs
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 14){
    element = <AceOfSpades
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 15){
    element = <TwoOfSpades
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 16){
    element = <ThreeOfSpades
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 17){
    element = <FourOfSpades
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 18){
    element = <FiveOfSpades
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 19){
    element = <SixOfSpades
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 20){
    element = <SevenOfSpades
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 21){
    element = <EightOfSpades
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 22){
    element = <NineOfSpades
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 23){
    element = <TenOfSpades
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 24){
    element = <JackOfSpades
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 25){
    element = <QueenOfSpades
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 26){
    element = <KingOfSpades
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 27){
    element = <AceOfHearts
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 28){
    element = <TwoOfHearts
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 29){
    element = <ThreeOfHearts
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 30){
    element = <FourOfHearts
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 31){
    element = <FiveOfHearts
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 32){
    element = <SixOfHearts
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 33){
    element = <SevenOfHearts
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 34){
    element = <EightOfHearts
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 35){
    element = <NineOfHearts
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 36){
    element = <TenOfHearts
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 37){
    element = <JackOfHearts
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 38){
    element = <QueenOfHearts
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 39){
    element = <KingOfHearts
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 40){
    element = <AceOfDiamonds
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 41){
    element = <TwoOfDiamonds
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 42){
    element = <ThreeOfDiamonds
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 43){
    element = <FourOfDiamonds
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 44){
    element = <FiveOfDiamonds
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 45){
    element = <SixOfDiamonds
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 46){
    element = <SevenOfDiamonds
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 47){
    element = <EightOfDiamonds
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 48){
    element = <NineOfDiamonds
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 49){
    element = <TenOfDiamonds
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 50){
    element = <JackOfDiamonds
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 51){
    element = <QueenOfDiamonds
      id={C}
        onClick={()=>{}}
    />
  }else if(C === 52){
    element = <KingOfDiamonds
      id={C}
        onClick={()=>{}}
  />}
  return <div className={style}>{element}</div>
  };
  const elementMaker = () => {
    const elements = [];
    const randoms: number[] = []
    for(let i = 0; i < amount; i++) {
      let style: string
      let random: number
      if(i === 0){
        style = styles.randomCard;
        random = Math.ceil(Math.random() * 52)
        while(randoms.includes(random)){
          random = Math.ceil(Math.random() * 52)
        }
        randoms.push(random)
        elements.push(cardMaker(randoms[randoms.length - 1], style))
      }else if(i === 1){
        style = styles.randomCardTwo;
        random = Math.ceil(Math.random() * 52)
        while(randoms.includes(random)){
          random = Math.ceil(Math.random() * 52)
        }
        randoms.push(random)
        elements.push(cardMaker(randoms[randoms.length - 1], style))
      }else if(i === 2){
        style = styles.randomCardThree;
        random = Math.ceil(Math.random() * 52)
        while(randoms.includes(random)){
          random = Math.ceil(Math.random() * 52)
        }
        randoms.push(random)
        elements.push(cardMaker(randoms[randoms.length - 1], style))
      }
    }
    return elements
  }
  return elementMaker().map((element, index) => <div key={index + amount} className={styles.cardHolder}>{element}</div>);
}
return({
  ...props,
  randomCardElement,
  searchPlaceable,
  isGameRunning,
  RestartGame,
  StartGame,
  EndGame,
  gameType,
  undoMove,
  gamePoints,
  gameCards,
  deck,
  removeFromPile,
  setGameCards,
  prevClicked,
  setPrevClicked,
  prevClickedCount,
  setPrevClickedCount
})}

export default useMenuElements;