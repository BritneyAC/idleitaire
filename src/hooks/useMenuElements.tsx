import useGameLogic, { card } from "./useGameLogic"
import { User } from "./useUserInfo"
import styles from "@/styles/css/BoardElement.module.css"


import AceOfClubs from "@/cards/1.svg"
import TwoOfClubs from "@/cards/2.svg"
import ThreeOfClubs from "@/cards/3.svg"
import FourOfClubs from "@/cards/4.svg"
import FiveOfClubs from "@/cards/5.svg"
import SixOfClubs from "@/cards/6.svg"
import SevenOfClubs from "@/cards/7.svg"
import EightOfClubs from "@/cards/8.svg"
import NineOfClubs from "@/cards/9.svg"
import TenOfClubs from "@/cards/10.svg"
import JackOfClubs from "@/cards/11.svg"
import QueenOfClubs from "@/cards/12.svg"
import KingOfClubs from "@/cards/13.svg"
import AceOfSpades from "@/cards/14.svg"
import TwoOfSpades from "@/cards/15.svg"
import ThreeOfSpades from "@/cards/16.svg"
import FourOfSpades from "@/cards/17.svg"
import FiveOfSpades from "@/cards/18.svg"
import SixOfSpades from "@/cards/19.svg"
import SevenOfSpades from "@/cards/20.svg"
import EightOfSpades from "@/cards/21.svg"
import NineOfSpades from "@/cards/22.svg"
import TenOfSpades from "@/cards/23.svg"
import JackOfSpades from "@/cards/24.svg"
import QueenOfSpades from "@/cards/25.svg"
import KingOfSpades from "@/cards/26.svg"
import AceOfHearts from "@/cards/27.svg"
import TwoOfHearts from "@/cards/28.svg"
import ThreeOfHearts from "@/cards/29.svg"
import FourOfHearts from "@/cards/30.svg"
import FiveOfHearts from "@/cards/31.svg"
import SixOfHearts from "@/cards/32.svg"
import SevenOfHearts from "@/cards/33.svg"
import EightOfHearts from "@/cards/34.svg"
import NineOfHearts from "@/cards/35.svg"
import TenOfHearts from "@/cards/36.svg"
import JackOfHearts from "@/cards/37.svg"
import QueenOfHearts from "@/cards/38.svg"
import KingOfHearts from "@/cards/39.svg"
import AceOfDiamonds from "@/cards/40.svg"
import TwoOfDiamonds from "@/cards/41.svg"
import ThreeOfDiamonds from "@/cards/42.svg"
import FourOfDiamonds from "@/cards/43.svg"
import FiveOfDiamonds from "@/cards/44.svg"
import SixOfDiamonds from "@/cards/45.svg"
import SevenOfDiamonds from "@/cards/46.svg"
import EightOfDiamonds from "@/cards/47.svg"
import NineOfDiamonds from "@/cards/48.svg"
import TenOfDiamonds from "@/cards/49.svg"
import JackOfDiamonds from "@/cards/50.svg"
import QueenOfDiamonds from "@/cards/51.svg"
import KingOfDiamonds from "@/cards/52.svg"

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
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 2){
    element = <TwoOfClubs
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 3){
    element = <ThreeOfClubs
      key={C}
      id={`${C}`}
      alt={`${C}`}
      />
    }else if(C === 4){
      element = <FourOfClubs
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 5){
    element = <FiveOfClubs
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 6){
    element = <SixOfClubs
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 7){
    element = <SevenOfClubs
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 8){
    element = <EightOfClubs
      key={C}
      id={`${C}`}
      alt={`${C}`}
      />
  }else if(C === 9){
    element = <NineOfClubs
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 10){
    element = <TenOfClubs
    key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 11){
    element = <JackOfClubs
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 12){
    element = <QueenOfClubs
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 13){
    element = <KingOfClubs
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 14){
    element = <AceOfSpades
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 15){
    element = <TwoOfSpades
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 16){
    element = <ThreeOfSpades
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 17){
    element = <FourOfSpades
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 18){
    element = <FiveOfSpades
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 19){
    element = <SixOfSpades
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 20){
    element = <SevenOfSpades
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 21){
    element = <EightOfSpades
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 22){
    element = <NineOfSpades
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 23){
    element = <TenOfSpades
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 24){
    element = <JackOfSpades
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 25){
    element = <QueenOfSpades
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 26){
    element = <KingOfSpades
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 27){
    element = <AceOfHearts
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 28){
    element = <TwoOfHearts
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 29){
    element = <ThreeOfHearts
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 30){
    element = <FourOfHearts
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 31){
    element = <FiveOfHearts
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 32){
    element = <SixOfHearts
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 33){
    element = <SevenOfHearts
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 34){
    element = <EightOfHearts
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 35){
    element = <NineOfHearts
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 36){
    element = <TenOfHearts
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 37){
    element = <JackOfHearts
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 38){
    element = <QueenOfHearts
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 39){
    element = <KingOfHearts
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 40){
    element = <AceOfDiamonds
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 41){
    element = <TwoOfDiamonds
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 42){
    element = <ThreeOfDiamonds
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 43){
    element = <FourOfDiamonds
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 44){
    element = <FiveOfDiamonds
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 45){
    element = <SixOfDiamonds
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 46){
    element = <SevenOfDiamonds
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 47){
    element = <EightOfDiamonds
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 48){
    element = <NineOfDiamonds
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 49){
    element = <TenOfDiamonds
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 50){
    element = <JackOfDiamonds
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 51){
    element = <QueenOfDiamonds
      key={C}
      id={`${C}`}
      alt={`${C}`}
    />
  }else if(C === 52){
    element = <KingOfDiamonds
      key={C}
      id={`${C}`}
      alt={`${C}`}
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