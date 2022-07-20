import useGameLogic, { card } from "./useGameLogic"
import { User } from "./useUserInfo"
import styles from "@/styles/css/BoardElement.module.css"


import Cardback from "@/cards/cardback.svg"
import AceOfClubs from "@/components/cardComponents/AceOfClubs"
import TwoOfClubs from "@/components/cardComponents/TwoOfClubs"
import ThreeOfClubs from "@/components/cardComponents/ThreeOfClubs"
import FourOfClubs from "@/components/cardComponents/FourOfClubs"
import FiveOfClubs from "@/components/cardComponents/FiveOfClubs"
import SixOfClubs from "@/components/cardComponents/SixOfClubs"
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
import { NextPage } from "next"

interface UseBoardElementsProps {
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

const useBoardElements= (props: UseBoardElementsProps) => {
  const {deck, 
    gameCards, 
    handleClick,
    flipCard,
    flip3Cards,
    flipSpider,
    searchPlaceable,
    resetDeck,
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

    
    
    let DeckElements
    
    

    const ClubsElements = gameCards.Clubs.map((Card: card, index: number) => {
      const C = Card.value
      let element
      if(index === gameCards.Clubs.length - 1){ 
        if(C === 1){
          element = <AceOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 2){
          element = <TwoOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 3){
          element = <ThreeOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 4){
          element = <FourOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 5){
          element = <FiveOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 6){
          element = <SixOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 7){
          element = <SevenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 8){
          element = <EightOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 9){
          element = <NineOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 10){
          element = <TenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 11){
          element = <JackOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 12){
          element = <QueenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 13){
          element = <KingOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }} return <div className={`${styles.clubs} card`} id={C.toString()} key={C} draggable="true">{element}</div> 
    })

    const SpadesElements = gameCards.Spades.map((Card: card, index: number) => {
      const C = Card.value
      let element
      if(index === gameCards.Spades.length - 1){
        if(C === 14){
          element = <AceOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 15){
          element = <TwoOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 16){
          element = <ThreeOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 17){
          element = <FourOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 18){
          element = <FiveOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 19){
          element = <SixOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 20){
          element = <SevenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 21){
          element = <EightOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 22){
          element = <NineOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 23){
          element = <TenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 24){
          element = <JackOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 25){
          element = <QueenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 26){
          element = <KingOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }} return <div className={`${styles.spades} card`} id={C.toString()} key={C} draggable="true">{element}</div>
    })

    const HeartsElements = gameCards.Hearts.map((Card: card, index: number) => {
      const C = Card.value
      let element 
      if(index === gameCards.Hearts.length - 1){
        if(C === 27){
          element = <AceOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 28){
          element = <TwoOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 29){
          element = <ThreeOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 30){
          element = <FourOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 31){
          element = <FiveOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 32){
          element = <SixOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 33){
          element = <SevenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 34){
          element = <EightOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 35){
          element = <NineOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 36){
          element = <TenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 37){
          element = <JackOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 38){
          element = <QueenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 39){
          element = <KingOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }} return <div className={`${styles.hearts} card`} id={C.toString()} draggable="true" key={C}>{element}</div>
    })

    const DiamondsElements = gameCards.Diamonds.map((Card: card, index: number) => {
      const C = Card.value
      let element
      if(index === gameCards.Diamonds.length - 1){ 
        if(C === 40){
          element = <AceOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 41){
          element = <TwoOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 42){
          element = <ThreeOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 43){
          element = <FourOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 44){
          element = <FiveOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 45){
          element = <SixOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 46){
          element = <SevenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 47){
          element = <EightOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 48){
          element = <NineOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 49){
          element = <TenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 50){
          element = <JackOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 51){
          element = <QueenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 52){
          element = <KingOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
      />}} return <div className={`${styles.diamonds} card`} id={C.toString()} key={C} draggable="true">{element}</div>
    })




    if(deck.length > 0){
      if(gameType === "spider"){
        DeckElements = <div className={styles.spiderDeck} key={999}>
        <Cardback
          onClick={flipSpider}
          alt="cardback"
        /></div>
      }else {
      DeckElements = deck.map((Card: card, index: number) => {
    const C = Card.value
        if(index < 5){
          let style
          if(index === 0){
            style = styles.deck0
          } else if(index === 1){
            style = styles.deck1
          } else if(index === 2){
            style = styles.deck2
          } else if(index === 3){
            style = styles.deck3
          } else if(index === 4){
            style = styles.deck4
          }
          if(gameType === "normal"){
            return <div className={style} key={C} draggable="true">
              <Cardback
                onClick={flipCard}
                alt="cardback"
          /></div>} else if(gameType === "3card"){
            return <div className={style} key={C} draggable="true">
              <Cardback
                onClick={flip3Cards}
                alt="cardback"
            /></div>
          }
  }})}} else{
      DeckElements = gameType !== "spider" && <div key={150} className={styles.deckEmpty} onClick={resetDeck}></div>
    }




    const PlayableElements = gameCards.Playable.map((Card: card, index: number) => {
    const C = Card.value
      if(index > gameCards.Playable.length - 4 && index < gameCards.Playable.length - 1){ 
        let element
        let style
        if(index === gameCards.Playable.length - 2){
          style = styles.playable2
        } else if(index === gameCards.Playable.length - 3){
          style = styles.playable1
        } 
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
        return <div className={style} key={C}>{element}</div>
  } else if(index === gameCards.Playable.length - 1){
        let element
        if(C === 1){
          element = <AceOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 2){
          element = <TwoOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 3){
          element = <ThreeOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 4){
          element = <FourOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 5){
          element = <FiveOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 6){
          element = <SixOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 7){
          element = <SevenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 8){
          element = <EightOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 9){
          element = <NineOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 10){
          element = <TenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 11){
          element = <JackOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 12){
          element = <QueenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 13){
          element = <KingOfClubs
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 14){
          element = <AceOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 15){
          element = <TwoOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 16){
          element = <ThreeOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 17){
          element = <FourOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 18){
          element = <FiveOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 19){
          element = <SixOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 20){
          element = <SevenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 21){
          element = <EightOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 22){
          element = <NineOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 23){
          element = <TenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 24){
          element = <JackOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 25){
          element = <QueenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 26){
          element = <KingOfSpades
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 27){
          element = <AceOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 28){
          element = <TwoOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 29){
          element = <ThreeOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 30){
          element = <FourOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 31){
          element = <FiveOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 32){
          element = <SixOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 33){
          element = <SevenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 34){
          element = <EightOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 35){
          element = <NineOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 36){
          element = <TenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 37){
          element = <JackOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 38){
          element = <QueenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 39){
          element = <KingOfHearts
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 40){
          element = <AceOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 41){
          element = <TwoOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 42){
          element = <ThreeOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 43){
          element = <FourOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 44){
          element = <FiveOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 45){
          element = <SixOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 46){
          element = <SevenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 47){
          element = <EightOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 48){
          element = <NineOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 49){
          element = <TenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 50){
          element = <JackOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 51){
          element = <QueenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />
        }else if(C === 52){
          element = <KingOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
          />} 
      return <div className={`${styles.playable3} card`} id={C.toString()} key={C} draggable="true">{element}</div>
  }})


    const Column1Elements = gameCards.Columns[0].map((Card: card, index: number) => {
      const C = Card.value
      let style
      if(index === 0){
        style = styles.card0
      } else if(index === 1){
        style = styles.card1
      } else if(index === 2){
        style = styles.card2
      } else if(index === 3){
        style = styles.card3
      } else if(index === 4){
        style = styles.card4
      } else if(index === 5){
        style = styles.card5
      } else if(index === 6){
        style = styles.card6
      } else if(index === 7){
        style = styles.card7
      } else if(index === 8){
        style = styles.card8
      } else if(index === 9){
        style = styles.card9
      } else if(index === 10){
        style = styles.card10
      } else if(index === 11){
        style = styles.card11
      } else if(index === 12){
        style = styles.card12
      } else if(index === 13){
        style = styles.card13
      } else if(index === 14){
        style = styles.card14
      } else if(index === 15){
        style = styles.card15
      } else if(index === 16){
        style = styles.card16
      } else if(index === 17){
        style = styles.card17
      } else if(index === 18){
        style = styles.card18
      } else if(index === 19){
        style = styles.card19
      }
      if(!!Card.shown){
        if(C === 1){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 2){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 3){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 4){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 5){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 6){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 7){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 8){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 9){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 10){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 11){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 12){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 13){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 14){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 15){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 16){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 17){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 18){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 19){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 20){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 21){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 22){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 23){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 24){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 25){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 26){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 27){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 28){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 29){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 30){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 31){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 32){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 33){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 34){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 35){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 36){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 37){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 38){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 39){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 40){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 41){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 42){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 43){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 44){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 45){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 46){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 47){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 48){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 49){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 50){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 51){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 52){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}}else{
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><Cardback
            alt="cardback"
    /></div>}})


    const Column2Elements = gameCards.Columns[1].map((Card: card, index: number) => {
      const C = Card.value
      let style
      if(index === 0){
        style = styles.card0
      } else if(index === 1){
        style = styles.card1
      } else if(index === 2){
        style = styles.card2
      } else if(index === 3){
        style = styles.card3
      } else if(index === 4){
        style = styles.card4
      } else if(index === 5){
        style = styles.card5
      } else if(index === 6){
        style = styles.card6
      } else if(index === 7){
        style = styles.card7
      } else if(index === 8){
        style = styles.card8
      } else if(index === 9){
        style = styles.card9
      } else if(index === 10){
        style = styles.card10
      } else if(index === 11){
        style = styles.card11
      } else if(index === 12){
        style = styles.card12
      } else if(index === 13){
        style = styles.card13
      } else if(index === 14){
        style = styles.card14
      } else if(index === 15){
        style = styles.card15
      } else if(index === 16){
        style = styles.card16
      } else if(index === 17){
        style = styles.card17
      } else if(index === 18){
        style = styles.card18
      } else if(index === 19){
        style = styles.card19
      }
      if(!!Card.shown){
        if(C === 1){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 2){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 3){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 4){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 5){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 6){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 7){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 8){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 9){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 10){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 11){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 12){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 13){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 14){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 15){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 16){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 17){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 18){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 19){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 20){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 21){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 22){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 23){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 24){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 25){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 26){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 27){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 28){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 29){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 30){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 31){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 32){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 33){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 34){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 35){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 36){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 37){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 38){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 39){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 40){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 41){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 42){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 43){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 44){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 45){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 46){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 47){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 48){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 49){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 50){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 51){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 52){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}}else{
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><Cardback
            alt="cardback"
    /></div>}})


    const Column3Elements = gameCards.Columns[2].map((Card: card, index: number) => {
    const C = Card.value
      let style
      if(index === 0){
        style = styles.card0
      } else if(index === 1){
        style = styles.card1
      } else if(index === 2){
        style = styles.card2
      } else if(index === 3){
        style = styles.card3
      } else if(index === 4){
        style = styles.card4
      } else if(index === 5){
        style = styles.card5
      } else if(index === 6){
        style = styles.card6
      } else if(index === 7){
        style = styles.card7
      } else if(index === 8){
        style = styles.card8
      } else if(index === 9){
        style = styles.card9
      } else if(index === 10){
        style = styles.card10
      } else if(index === 11){
        style = styles.card11
      } else if(index === 12){
        style = styles.card12
      } else if(index === 13){
        style = styles.card13
      } else if(index === 14){
        style = styles.card14
      } else if(index === 15){
        style = styles.card15
      } else if(index === 16){
        style = styles.card16
      } else if(index === 17){
        style = styles.card17
      } else if(index === 18){
        style = styles.card18
      } else if(index === 19){
        style = styles.card19
      }
      if(!!Card.shown){
        if(C === 1){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 2){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 3){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 4){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 5){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 6){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 7){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 8){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 9){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 10){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 11){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 12){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 13){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 14){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 15){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 16){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 17){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 18){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 19){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 20){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 21){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 22){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 23){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 24){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 25){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 26){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 27){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 28){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 29){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 30){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 31){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 32){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 33){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 34){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 35){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 36){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 37){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 38){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 39){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 40){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 41){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 42){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 43){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 44){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 45){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 46){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 47){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 48){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 49){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 50){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 51){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 52){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}}else{
          return <div className={`${style} card`} key={C} draggable="true"><Cardback
            alt="cardback"
    /></div>}})


    const Column4Elements = gameCards.Columns[3].map((Card: card, index: number) => {
    const C = Card.value
      let style
      if(index === 0){
        style = styles.card0
      } else if(index === 1){
        style = styles.card1
      } else if(index === 2){
        style = styles.card2
      } else if(index === 3){
        style = styles.card3
      } else if(index === 4){
        style = styles.card4
      } else if(index === 5){
        style = styles.card5
      } else if(index === 6){
        style = styles.card6
      } else if(index === 7){
        style = styles.card7
      } else if(index === 8){
        style = styles.card8
      } else if(index === 9){
        style = styles.card9
      } else if(index === 10){
        style = styles.card10
      } else if(index === 11){
        style = styles.card11
      } else if(index === 12){
        style = styles.card12
      } else if(index === 13){
        style = styles.card13
      } else if(index === 14){
        style = styles.card14
      } else if(index === 15){
        style = styles.card15
      } else if(index === 16){
        style = styles.card16
      } else if(index === 17){
        style = styles.card17
      } else if(index === 18){
        style = styles.card18
      } else if(index === 19){
        style = styles.card19
      }
      if(!!Card.shown){
        if(C === 1){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 2){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 3){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 4){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 5){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 6){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 7){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 8){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 9){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 10){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 11){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 12){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 13){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 14){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 15){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 16){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 17){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 18){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 19){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 20){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 21){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 22){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 23){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 24){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 25){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 26){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 27){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 28){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 29){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 30){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 31){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 32){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 33){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 34){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 35){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 36){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 37){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 38){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 39){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 40){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 41){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 42){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 43){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 44){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 45){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 46){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 47){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 48){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 49){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 50){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 51){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 52){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}}else{
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><Cardback
            alt="cardback"
    /></div>}})


    const Column5Elements = gameCards.Columns[4].map((Card: card, index: number) => {
    const C = Card.value
      let style
      if(index === 0){
        style = styles.card0
      } else if(index === 1){
        style = styles.card1
      } else if(index === 2){
        style = styles.card2
      } else if(index === 3){
        style = styles.card3
      } else if(index === 4){
        style = styles.card4
      } else if(index === 5){
        style = styles.card5
      } else if(index === 6){
        style = styles.card6
      } else if(index === 7){
        style = styles.card7
      } else if(index === 8){
        style = styles.card8
      } else if(index === 9){
        style = styles.card9
      } else if(index === 10){
        style = styles.card10
      } else if(index === 11){
        style = styles.card11
      } else if(index === 12){
        style = styles.card12
      } else if(index === 13){
        style = styles.card13
      } else if(index === 14){
        style = styles.card14
      } else if(index === 15){
        style = styles.card15
      } else if(index === 16){
        style = styles.card16
      } else if(index === 17){
        style = styles.card17
      } else if(index === 18){
        style = styles.card18
      } else if(index === 19){
        style = styles.card19
      }
      if(!!Card.shown){
        if(C === 1){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 2){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 3){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 4){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 5){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 6){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 7){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 8){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 9){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 10){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 11){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 12){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 13){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 14){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 15){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 16){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 17){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 18){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 19){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 20){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 21){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 22){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 23){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 24){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 25){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 26){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 27){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 28){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 29){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 30){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 31){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 32){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 33){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 34){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 35){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 36){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 37){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 38){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 39){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 40){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 41){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 42){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 43){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 44){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 45){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 46){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 47){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 48){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 49){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 50){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 51){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 52){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}}else{
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><Cardback
            alt="cardback"
    /></div>}})


    const Column6Elements = gameCards.Columns[5].map((Card: card, index: number) => {
    const C = Card.value
      let style
      if(index === 0){
        style = styles.card0
      } else if(index === 1){
        style = styles.card1
      } else if(index === 2){
        style = styles.card2
      } else if(index === 3){
        style = styles.card3
      } else if(index === 4){
        style = styles.card4
      } else if(index === 5){
        style = styles.card5
      } else if(index === 6){
        style = styles.card6
      } else if(index === 7){
        style = styles.card7
      } else if(index === 8){
        style = styles.card8
      } else if(index === 9){
        style = styles.card9
      } else if(index === 10){
        style = styles.card10
      } else if(index === 11){
        style = styles.card11
      } else if(index === 12){
        style = styles.card12
      } else if(index === 13){
        style = styles.card13
      } else if(index === 14){
        style = styles.card14
      } else if(index === 15){
        style = styles.card15
      } else if(index === 16){
        style = styles.card16
      } else if(index === 17){
        style = styles.card17
      } else if(index === 18){
        style = styles.card18
      } else if(index === 19){
        style = styles.card19
      }
      if(!!Card.shown){
        if(C === 1){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 2){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 3){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 4){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 5){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 6){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 7){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 8){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 9){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 10){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 11){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 12){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 13){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 14){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 15){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 16){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 17){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 18){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 19){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 20){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 21){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 22){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 23){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 24){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 25){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 26){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 27){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 28){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 29){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 30){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 31){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 32){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 33){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 34){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 35){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 36){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 37){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 38){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 39){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 40){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 41){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 42){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 43){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 44){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 45){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 46){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 47){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 48){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 49){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 50){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 51){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 52){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}}else{
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><Cardback
            alt="cardback"
    /></div>}})

    
    const Column7Elements = gameCards.Columns[6].map((Card: card, index: number) => {
    const C = Card.value
      let style
      if(index === 0){
        style = styles.card0
      } else if(index === 1){
        style = styles.card1
      } else if(index === 2){
        style = styles.card2
      } else if(index === 3){
        style = styles.card3
      } else if(index === 4){
        style = styles.card4
      } else if(index === 5){
        style = styles.card5
      } else if(index === 6){
        style = styles.card6
      } else if(index === 7){
        style = styles.card7
      } else if(index === 8){
        style = styles.card8
      } else if(index === 9){
        style = styles.card9
      } else if(index === 10){
        style = styles.card10
      } else if(index === 11){
        style = styles.card11
      } else if(index === 12){
        style = styles.card12
      } else if(index === 13){
        style = styles.card13
      } else if(index === 14){
        style = styles.card14
      } else if(index === 15){
        style = styles.card15
      } else if(index === 16){
        style = styles.card16
      } else if(index === 17){
        style = styles.card17
      } else if(index === 18){
        style = styles.card18
      } else if(index === 19){
        style = styles.card19
      }
      if(!!Card.shown){
        if(C === 1){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 2){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 3){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 4){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 5){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 6){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 7){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 8){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 9){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 10){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 11){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 12){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 13){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfClubs
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 14){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 15){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 16){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 17){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 18){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 19){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 20){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 21){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 22){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 23){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 24){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 25){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 26){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfSpades
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 27){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 28){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 29){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 30){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 31){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 32){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 33){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 34){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 35){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 36){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 37){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 38){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 39){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfHearts
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 40){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><AceOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 41){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TwoOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 42){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><ThreeOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 43){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FourOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 44){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><FiveOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 45){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SixOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 46){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><SevenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 47){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><EightOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 48){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><NineOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 49){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><TenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 50){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><JackOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 51){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><QueenOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}else if(C === 52){
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><KingOfDiamonds
            id={C}
            onClick={()=>handleClick(C)}
        /></div>}}else{
          return <div className={`${style} card`} id={C.toString()} key={C} draggable="true"><Cardback
            alt="cardback"
    /></div>}})
    
    return({
      ...props,
      ClubsElements, 
      SpadesElements, 
      HeartsElements, 
      DiamondsElements, 
      DeckElements,
      PlayableElements,
      Column1Elements,
      Column2Elements,
      Column3Elements,
      Column4Elements,
      Column5Elements,
      Column6Elements,
      Column7Elements,
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
  })
  
}
export default useBoardElements