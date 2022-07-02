import React from "react"
import Image from "next/image"
import useGameLogic, { card } from "./useGameLogic"
import { User } from "./useUserInfo"
import styles from "@/styles/css/BoardElement.module.css"


import Cardback from "@/cards/cardback.svg"
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
    cards, 
    handleClick,
    flipCard,
    flip3Cards,
    flipSpider,
    resetDeck,
    undoMove,
    isGameRunning,
    RestartGame,
    StartGame,
    EndGame,
    gameType,
    gamePoints,
  } = useGameLogic({...props, roboGame: false})
  
  let DeckElements
  
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

  const ClubsElements = cards.Clubs.map((C: number, index: number) => {
    if(index === cards.Clubs.length - 1){ 
      if(C === 1){
        return <AceOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 2){
        return <TwoOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 3){
        return <ThreeOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 4){
        return <FourOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 5){
        return <FiveOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 6){
        return <SixOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 7){
        return <SevenOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 8){
        return <EightOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 9){
        return <NineOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 10){
        return <TenOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 11){
        return <JackOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 12){
        return <QueenOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 13){
        return <KingOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }
  }})
  const SpadesElements = cards.Spades.map((C: number, index: number) => {
    if(index === cards.Spades.length - 1){
      if(C === 14){
        return <AceOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 15){
        return <TwoOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 16){
        return <ThreeOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 17){
        return <FourOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 18){
        return <FiveOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 19){
        return <SixOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 20){
        return <SevenOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 21){
        return <EightOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 22){
        return <NineOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 23){
        return <TenOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 24){
        return <JackOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 25){
        return <QueenOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 26){
        return <KingOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }}})
  const HeartsElements = cards.Hearts.map((C: number, index: number) => {
    if(index === cards.Hearts.length - 1){ 
      if(C === 27){
        return <AceOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 28){
        return <TwoOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 29){
        return <ThreeOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 30){
        return <FourOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 31){
        return <FiveOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 32){
        return <SixOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 33){
        return <SevenOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 34){
        return <EightOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 35){
        return <NineOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 36){
        return <TenOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 37){
        return <JackOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 38){
        return <QueenOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 39){
        return <KingOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }}})
  const DiamondsElements = cards.Diamonds.map((C: number, index: number) => {
    if(index === cards.Diamonds.length - 1){ 
      if(C === 40){
        return <AceOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 41){
        return <TwoOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 42){
        return <ThreeOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 43){
        return <FourOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 44){
        return <FiveOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 45){
        return <SixOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 46){
        return <SevenOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 47){
        return <EightOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 48){
        return <NineOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 49){
        return <TenOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 50){
        return <JackOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 51){
        return <QueenOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 52){
        return <KingOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
  />}}})
  if(deck.length > 0){
    if(gameType === "spider"){
      DeckElements = <div className={styles.spiderDeck} key={999}>
      <Cardback
        onClick={flipSpider}
        alt="cardback"
      /></div>
    }else {
    DeckElements = deck.map((C: number, index: number) => {
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
          return <div className={style} key={C}>
            <Cardback
              onClick={flipCard}
              alt="cardback"
        /></div>} else if(gameType === "3card"){
          return <div className={style} key={C}>
            <Cardback
              onClick={flip3Cards}
              alt="cardback"
          /></div>
        }
}})}} else{
    DeckElements = gameType !== "spider" && <div key={0} className={styles.deckEmpty} onClick={resetDeck}></div>
  }
  const PlayableElements = cards.Playable.map((C: number, index: number) => {
    if(index > cards.Playable.length - 4 && index < cards.Playable.length - 1){ 
      let element
      let style
      if(index === cards.Playable.length - 2){
        style = styles.playable2
      } else if(index === cards.Playable.length - 3){
        style = styles.playable1
      } 
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
} else if(index === cards.Playable.length - 1){
      let element
      if(C === 1){
        element = <AceOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 2){
        element = <TwoOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 3){
        element = <ThreeOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 4){
        element = <FourOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 5){
        element = <FiveOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 6){
        element = <SixOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 7){
        element = <SevenOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 8){
        element = <EightOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 9){
        element = <NineOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 10){
        element = <TenOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 11){
        element = <JackOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 12){
        element = <QueenOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 13){
        element = <KingOfClubs
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 14){
        element = <AceOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 15){
        element = <TwoOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 16){
        element = <ThreeOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 17){
        element = <FourOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 18){
        element = <FiveOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 19){
        element = <SixOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 20){
        element = <SevenOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 21){
        element = <EightOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 22){
        element = <NineOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 23){
        element = <TenOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 24){
        element = <JackOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 25){
        element = <QueenOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 26){
        element = <KingOfSpades
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 27){
        element = <AceOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 28){
        element = <TwoOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 29){
        element = <ThreeOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 30){
        element = <FourOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 31){
        element = <FiveOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 32){
        element = <SixOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 33){
        element = <SevenOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 34){
        element = <EightOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 35){
        element = <NineOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 36){
        element = <TenOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 37){
        element = <JackOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 38){
        element = <QueenOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 39){
        element = <KingOfHearts
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 40){
        element = <AceOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 41){
        element = <TwoOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 42){
        element = <ThreeOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 43){
        element = <FourOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 44){
        element = <FiveOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 45){
        element = <SixOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 46){
        element = <SevenOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 47){
        element = <EightOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 48){
        element = <NineOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 49){
        element = <TenOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 50){
        element = <JackOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 51){
        element = <QueenOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 52){
        element = <KingOfDiamonds
          key={C}
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />} 
    return <div className={styles.playable3}>{element}</div>
}})
  const Column1Elements = cards.Columns[0].map((C: number, index: number) => {
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
    if(cards.ShownCards.includes(C)){
      if(C === 1){
        return <div className={style} key={C}><AceOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 2){
        return <div className={style} key={C}><TwoOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 3){
        return <div className={style} key={C}><ThreeOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 4){
        return <div className={style} key={C}><FourOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 5){
        return <div className={style} key={C}><FiveOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 6){
        return <div className={style} key={C}><SixOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 7){
        return <div className={style} key={C}><SevenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 8){
        return <div className={style} key={C}><EightOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 9){
        return <div className={style} key={C}><NineOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 10){
        return <div className={style} key={C}><TenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 11){
        return <div className={style} key={C}><JackOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 12){
        return <div className={style} key={C}><QueenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 13){
        return <div className={style} key={C}><KingOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 14){
        return <div className={style} key={C}><AceOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 15){
        return <div className={style} key={C}><TwoOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 16){
        return <div className={style} key={C}><ThreeOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 17){
        return <div className={style} key={C}><FourOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 18){
        return <div className={style} key={C}><FiveOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 19){
        return <div className={style} key={C}><SixOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 20){
        return <div className={style} key={C}><SevenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 21){
        return <div className={style} key={C}><EightOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 22){
        return <div className={style} key={C}><NineOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 23){
        return <div className={style} key={C}><TenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 24){
        return <div className={style} key={C}><JackOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 25){
        return <div className={style} key={C}><QueenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 26){
        return <div className={style} key={C}><KingOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 27){
        return <div className={style} key={C}><AceOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 28){
        return <div className={style} key={C}><TwoOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 29){
        return <div className={style} key={C}><ThreeOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 30){
        return <div className={style} key={C}><FourOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 31){
        return <div className={style} key={C}><FiveOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 32){
        return <div className={style} key={C}><SixOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 33){
        return <div className={style} key={C}><SevenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 34){
        return <div className={style} key={C}><EightOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 35){
        return <div className={style} key={C}><NineOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 36){
        return <div className={style} key={C}><TenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 37){
        return <div className={style} key={C}><JackOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 38){
        return <div className={style} key={C}><QueenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 39){
        return <div className={style} key={C}><KingOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 40){
        return <div className={style} key={C}><AceOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 41){
        return <div className={style} key={C}><TwoOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 42){
        return <div className={style} key={C}><ThreeOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 43){
        return <div className={style} key={C}><FourOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 44){
        return <div className={style} key={C}><FiveOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 45){
        return <div className={style} key={C}><SixOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 46){
        return <div className={style} key={C}><SevenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 47){
        return <div className={style} key={C}><EightOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 48){
        return <div className={style} key={C}><NineOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 49){
        return <div className={style} key={C}><TenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 50){
        return <div className={style} key={C}><JackOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 51){
        return <div className={style} key={C}><QueenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 52){
        return <div className={style} key={C}><KingOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}}else{
        return <div className={style} key={C}><Cardback
          alt="cardback"
  /></div>}})
  const Column2Elements = cards.Columns[1].map((C: number, index: number) => {
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
    if(cards.ShownCards.includes(C)){
      if(C === 1){
        return <div className={style} key={C}><AceOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 2){
        return <div className={style} key={C}><TwoOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 3){
        return <div className={style} key={C}><ThreeOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 4){
        return <div className={style} key={C}><FourOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 5){
        return <div className={style} key={C}><FiveOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 6){
        return <div className={style} key={C}><SixOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 7){
        return <div className={style} key={C}><SevenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 8){
        return <div className={style} key={C}><EightOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 9){
        return <div className={style} key={C}><NineOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 10){
        return <div className={style} key={C}><TenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 11){
        return <div className={style} key={C}><JackOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 12){
        return <div className={style} key={C}><QueenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 13){
        return <div className={style} key={C}><KingOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 14){
        return <div className={style} key={C}><AceOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 15){
        return <div className={style} key={C}><TwoOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 16){
        return <div className={style} key={C}><ThreeOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 17){
        return <div className={style} key={C}><FourOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 18){
        return <div className={style} key={C}><FiveOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 19){
        return <div className={style} key={C}><SixOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 20){
        return <div className={style} key={C}><SevenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 21){
        return <div className={style} key={C}><EightOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 22){
        return <div className={style} key={C}><NineOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 23){
        return <div className={style} key={C}><TenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 24){
        return <div className={style} key={C}><JackOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 25){
        return <div className={style} key={C}><QueenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 26){
        return <div className={style} key={C}><KingOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 27){
        return <div className={style} key={C}><AceOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 28){
        return <div className={style} key={C}><TwoOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 29){
        return <div className={style} key={C}><ThreeOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 30){
        return <div className={style} key={C}><FourOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 31){
        return <div className={style} key={C}><FiveOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 32){
        return <div className={style} key={C}><SixOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 33){
        return <div className={style} key={C}><SevenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 34){
        return <div className={style} key={C}><EightOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 35){
        return <div className={style} key={C}><NineOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 36){
        return <div className={style} key={C}><TenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 37){
        return <div className={style} key={C}><JackOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 38){
        return <div className={style} key={C}><QueenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 39){
        return <div className={style} key={C}><KingOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 40){
        return <div className={style} key={C}><AceOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 41){
        return <div className={style} key={C}><TwoOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 42){
        return <div className={style} key={C}><ThreeOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 43){
        return <div className={style} key={C}><FourOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 44){
        return <div className={style} key={C}><FiveOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 45){
        return <div className={style} key={C}><SixOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 46){
        return <div className={style} key={C}><SevenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 47){
        return <div className={style} key={C}><EightOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 48){
        return <div className={style} key={C}><NineOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 49){
        return <div className={style} key={C}><TenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 50){
        return <div className={style} key={C}><JackOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 51){
        return <div className={style} key={C}><QueenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 52){
        return <div className={style} key={C}><KingOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}}else{
        return <div className={style} key={C}><Cardback
          alt="cardback"
  /></div>}})
  const Column3Elements = cards.Columns[2].map((C: number, index: number) => {
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
    if(cards.ShownCards.includes(C)){
      if(C === 1){
        return <div className={style} key={C}><AceOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 2){
        return <div className={style} key={C}><TwoOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 3){
        return <div className={style} key={C}><ThreeOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 4){
        return <div className={style} key={C}><FourOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 5){
        return <div className={style} key={C}><FiveOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 6){
        return <div className={style} key={C}><SixOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 7){
        return <div className={style} key={C}><SevenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 8){
        return <div className={style} key={C}><EightOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 9){
        return <div className={style} key={C}><NineOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 10){
        return <div className={style} key={C}><TenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 11){
        return <div className={style} key={C}><JackOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 12){
        return <div className={style} key={C}><QueenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 13){
        return <div className={style} key={C}><KingOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 14){
        return <div className={style} key={C}><AceOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 15){
        return <div className={style} key={C}><TwoOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 16){
        return <div className={style} key={C}><ThreeOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 17){
        return <div className={style} key={C}><FourOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 18){
        return <div className={style} key={C}><FiveOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 19){
        return <div className={style} key={C}><SixOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 20){
        return <div className={style} key={C}><SevenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 21){
        return <div className={style} key={C}><EightOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 22){
        return <div className={style} key={C}><NineOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 23){
        return <div className={style} key={C}><TenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 24){
        return <div className={style} key={C}><JackOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 25){
        return <div className={style} key={C}><QueenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 26){
        return <div className={style} key={C}><KingOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 27){
        return <div className={style} key={C}><AceOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 28){
        return <div className={style} key={C}><TwoOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 29){
        return <div className={style} key={C}><ThreeOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 30){
        return <div className={style} key={C}><FourOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 31){
        return <div className={style} key={C}><FiveOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 32){
        return <div className={style} key={C}><SixOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 33){
        return <div className={style} key={C}><SevenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 34){
        return <div className={style} key={C}><EightOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 35){
        return <div className={style} key={C}><NineOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 36){
        return <div className={style} key={C}><TenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 37){
        return <div className={style} key={C}><JackOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 38){
        return <div className={style} key={C}><QueenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 39){
        return <div className={style} key={C}><KingOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 40){
        return <div className={style} key={C}><AceOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 41){
        return <div className={style} key={C}><TwoOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 42){
        return <div className={style} key={C}><ThreeOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 43){
        return <div className={style} key={C}><FourOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 44){
        return <div className={style} key={C}><FiveOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 45){
        return <div className={style} key={C}><SixOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 46){
        return <div className={style} key={C}><SevenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 47){
        return <div className={style} key={C}><EightOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 48){
        return <div className={style} key={C}><NineOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 49){
        return <div className={style} key={C}><TenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 50){
        return <div className={style} key={C}><JackOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 51){
        return <div className={style} key={C}><QueenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 52){
        return <div className={style} key={C}><KingOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}}else{
        return <div className={style} key={C}><Cardback
          alt="cardback"
  /></div>}})
  const Column4Elements = cards.Columns[3].map((C: number, index: number) => {
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
    if(cards.ShownCards.includes(C)){
      if(C === 1){
        return <div className={style} key={C}><AceOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 2){
        return <div className={style} key={C}><TwoOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 3){
        return <div className={style} key={C}><ThreeOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 4){
        return <div className={style} key={C}><FourOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 5){
        return <div className={style} key={C}><FiveOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 6){
        return <div className={style} key={C}><SixOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 7){
        return <div className={style} key={C}><SevenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 8){
        return <div className={style} key={C}><EightOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 9){
        return <div className={style} key={C}><NineOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 10){
        return <div className={style} key={C}><TenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 11){
        return <div className={style} key={C}><JackOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 12){
        return <div className={style} key={C}><QueenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 13){
        return <div className={style} key={C}><KingOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 14){
        return <div className={style} key={C}><AceOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 15){
        return <div className={style} key={C}><TwoOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 16){
        return <div className={style} key={C}><ThreeOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 17){
        return <div className={style} key={C}><FourOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 18){
        return <div className={style} key={C}><FiveOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 19){
        return <div className={style} key={C}><SixOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 20){
        return <div className={style} key={C}><SevenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 21){
        return <div className={style} key={C}><EightOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 22){
        return <div className={style} key={C}><NineOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 23){
        return <div className={style} key={C}><TenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 24){
        return <div className={style} key={C}><JackOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 25){
        return <div className={style} key={C}><QueenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 26){
        return <div className={style} key={C}><KingOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 27){
        return <div className={style} key={C}><AceOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 28){
        return <div className={style} key={C}><TwoOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 29){
        return <div className={style} key={C}><ThreeOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 30){
        return <div className={style} key={C}><FourOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 31){
        return <div className={style} key={C}><FiveOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 32){
        return <div className={style} key={C}><SixOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 33){
        return <div className={style} key={C}><SevenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 34){
        return <div className={style} key={C}><EightOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 35){
        return <div className={style} key={C}><NineOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 36){
        return <div className={style} key={C}><TenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 37){
        return <div className={style} key={C}><JackOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 38){
        return <div className={style} key={C}><QueenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 39){
        return <div className={style} key={C}><KingOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 40){
        return <div className={style} key={C}><AceOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 41){
        return <div className={style} key={C}><TwoOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 42){
        return <div className={style} key={C}><ThreeOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 43){
        return <div className={style} key={C}><FourOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 44){
        return <div className={style} key={C}><FiveOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 45){
        return <div className={style} key={C}><SixOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 46){
        return <div className={style} key={C}><SevenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 47){
        return <div className={style} key={C}><EightOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 48){
        return <div className={style} key={C}><NineOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 49){
        return <div className={style} key={C}><TenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 50){
        return <div className={style} key={C}><JackOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 51){
        return <div className={style} key={C}><QueenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 52){
        return <div className={style} key={C}><KingOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}}else{
        return <div className={style} key={C}><Cardback
          alt="cardback"
  /></div>}})
  const Column5Elements = cards.Columns[4].map((C: number, index: number) => {
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
    if(cards.ShownCards.includes(C)){
      if(C === 1){
        return <div className={style} key={C}><AceOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 2){
        return <div className={style} key={C}><TwoOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 3){
        return <div className={style} key={C}><ThreeOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 4){
        return <div className={style} key={C}><FourOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 5){
        return <div className={style} key={C}><FiveOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 6){
        return <div className={style} key={C}><SixOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 7){
        return <div className={style} key={C}><SevenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 8){
        return <div className={style} key={C}><EightOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 9){
        return <div className={style} key={C}><NineOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 10){
        return <div className={style} key={C}><TenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 11){
        return <div className={style} key={C}><JackOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 12){
        return <div className={style} key={C}><QueenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 13){
        return <div className={style} key={C}><KingOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 14){
        return <div className={style} key={C}><AceOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 15){
        return <div className={style} key={C}><TwoOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 16){
        return <div className={style} key={C}><ThreeOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 17){
        return <div className={style} key={C}><FourOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 18){
        return <div className={style} key={C}><FiveOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 19){
        return <div className={style} key={C}><SixOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 20){
        return <div className={style} key={C}><SevenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 21){
        return <div className={style} key={C}><EightOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 22){
        return <div className={style} key={C}><NineOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 23){
        return <div className={style} key={C}><TenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 24){
        return <div className={style} key={C}><JackOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 25){
        return <div className={style} key={C}><QueenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 26){
        return <div className={style} key={C}><KingOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 27){
        return <div className={style} key={C}><AceOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 28){
        return <div className={style} key={C}><TwoOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 29){
        return <div className={style} key={C}><ThreeOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 30){
        return <div className={style} key={C}><FourOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 31){
        return <div className={style} key={C}><FiveOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 32){
        return <div className={style} key={C}><SixOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 33){
        return <div className={style} key={C}><SevenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 34){
        return <div className={style} key={C}><EightOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 35){
        return <div className={style} key={C}><NineOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 36){
        return <div className={style} key={C}><TenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 37){
        return <div className={style} key={C}><JackOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 38){
        return <div className={style} key={C}><QueenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 39){
        return <div className={style} key={C}><KingOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 40){
        return <div className={style} key={C}><AceOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 41){
        return <div className={style} key={C}><TwoOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 42){
        return <div className={style} key={C}><ThreeOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 43){
        return <div className={style} key={C}><FourOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 44){
        return <div className={style} key={C}><FiveOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 45){
        return <div className={style} key={C}><SixOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 46){
        return <div className={style} key={C}><SevenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 47){
        return <div className={style} key={C}><EightOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 48){
        return <div className={style} key={C}><NineOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 49){
        return <div className={style} key={C}><TenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 50){
        return <div className={style} key={C}><JackOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 51){
        return <div className={style} key={C}><QueenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 52){
        return <div className={style} key={C}><KingOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}}else{
        return <div className={style} key={C}><Cardback
          alt="cardback"
  /></div>}})
  const Column6Elements = cards.Columns[5].map((C: number, index: number) => {
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
    if(cards.ShownCards.includes(C)){
      if(C === 1){
        return <div className={style} key={C}><AceOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 2){
        return <div className={style} key={C}><TwoOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 3){
        return <div className={style} key={C}><ThreeOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 4){
        return <div className={style} key={C}><FourOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 5){
        return <div className={style} key={C}><FiveOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 6){
        return <div className={style} key={C}><SixOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 7){
        return <div className={style} key={C}><SevenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 8){
        return <div className={style} key={C}><EightOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 9){
        return <div className={style} key={C}><NineOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 10){
        return <div className={style} key={C}><TenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 11){
        return <div className={style} key={C}><JackOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 12){
        return <div className={style} key={C}><QueenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 13){
        return <div className={style} key={C}><KingOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 14){
        return <div className={style} key={C}><AceOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 15){
        return <div className={style} key={C}><TwoOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 16){
        return <div className={style} key={C}><ThreeOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 17){
        return <div className={style} key={C}><FourOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 18){
        return <div className={style} key={C}><FiveOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 19){
        return <div className={style} key={C}><SixOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 20){
        return <div className={style} key={C}><SevenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 21){
        return <div className={style} key={C}><EightOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 22){
        return <div className={style} key={C}><NineOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 23){
        return <div className={style} key={C}><TenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 24){
        return <div className={style} key={C}><JackOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 25){
        return <div className={style} key={C}><QueenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 26){
        return <div className={style} key={C}><KingOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 27){
        return <div className={style} key={C}><AceOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 28){
        return <div className={style} key={C}><TwoOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 29){
        return <div className={style} key={C}><ThreeOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 30){
        return <div className={style} key={C}><FourOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 31){
        return <div className={style} key={C}><FiveOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 32){
        return <div className={style} key={C}><SixOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 33){
        return <div className={style} key={C}><SevenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 34){
        return <div className={style} key={C}><EightOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 35){
        return <div className={style} key={C}><NineOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 36){
        return <div className={style} key={C}><TenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 37){
        return <div className={style} key={C}><JackOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 38){
        return <div className={style} key={C}><QueenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 39){
        return <div className={style} key={C}><KingOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 40){
        return <div className={style} key={C}><AceOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 41){
        return <div className={style} key={C}><TwoOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 42){
        return <div className={style} key={C}><ThreeOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 43){
        return <div className={style} key={C}><FourOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 44){
        return <div className={style} key={C}><FiveOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 45){
        return <div className={style} key={C}><SixOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 46){
        return <div className={style} key={C}><SevenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 47){
        return <div className={style} key={C}><EightOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 48){
        return <div className={style} key={C}><NineOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 49){
        return <div className={style} key={C}><TenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 50){
        return <div className={style} key={C}><JackOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 51){
        return <div className={style} key={C}><QueenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 52){
        return <div className={style} key={C}><KingOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}}else{
        return <div className={style} key={C}><Cardback
          alt="cardback"
  /></div>}})
  const Column7Elements = cards.Columns[6].map((C: number, index: number) => {
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
    if(cards.ShownCards.includes(C)){
      if(C === 1){
        return <div className={style} key={C}><AceOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 2){
        return <div className={style} key={C}><TwoOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 3){
        return <div className={style} key={C}><ThreeOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 4){
        return <div className={style} key={C}><FourOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 5){
        return <div className={style} key={C}><FiveOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 6){
        return <div className={style} key={C}><SixOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 7){
        return <div className={style} key={C}><SevenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 8){
        return <div className={style} key={C}><EightOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 9){
        return <div className={style} key={C}><NineOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 10){
        return <div className={style} key={C}><TenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 11){
        return <div className={style} key={C}><JackOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 12){
        return <div className={style} key={C}><QueenOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 13){
        return <div className={style} key={C}><KingOfClubs
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 14){
        return <div className={style} key={C}><AceOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 15){
        return <div className={style} key={C}><TwoOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 16){
        return <div className={style} key={C}><ThreeOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 17){
        return <div className={style} key={C}><FourOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 18){
        return <div className={style} key={C}><FiveOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 19){
        return <div className={style} key={C}><SixOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 20){
        return <div className={style} key={C}><SevenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 21){
        return <div className={style} key={C}><EightOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 22){
        return <div className={style} key={C}><NineOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 23){
        return <div className={style} key={C}><TenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 24){
        return <div className={style} key={C}><JackOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 25){
        return <div className={style} key={C}><QueenOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 26){
        return <div className={style} key={C}><KingOfSpades
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 27){
        return <div className={style} key={C}><AceOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 28){
        return <div className={style} key={C}><TwoOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 29){
        return <div className={style} key={C}><ThreeOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 30){
        return <div className={style} key={C}><FourOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 31){
        return <div className={style} key={C}><FiveOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 32){
        return <div className={style} key={C}><SixOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 33){
        return <div className={style} key={C}><SevenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 34){
        return <div className={style} key={C}><EightOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 35){
        return <div className={style} key={C}><NineOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 36){
        return <div className={style} key={C}><TenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 37){
        return <div className={style} key={C}><JackOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 38){
        return <div className={style} key={C}><QueenOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 39){
        return <div className={style} key={C}><KingOfHearts
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 40){
        return <div className={style} key={C}><AceOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 41){
        return <div className={style} key={C}><TwoOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 42){
        return <div className={style} key={C}><ThreeOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 43){
        return <div className={style} key={C}><FourOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 44){
        return <div className={style} key={C}><FiveOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 45){
        return <div className={style} key={C}><SixOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 46){
        return <div className={style} key={C}><SevenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 47){
        return <div className={style} key={C}><EightOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 48){
        return <div className={style} key={C}><NineOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 49){
        return <div className={style} key={C}><TenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 50){
        return <div className={style} key={C}><JackOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 51){
        return <div className={style} key={C}><QueenOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 52){
        return <div className={style} key={C}><KingOfDiamonds
          id={`${C}`}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}}else{
        return <div className={style} key={C}><Cardback
          alt="cardback"
  /></div>}})
  
  return{
    ...props,
    randomCardElement,
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
    isGameRunning,
    RestartGame,
    StartGame,
    EndGame,
    gameType,
    undoMove,
    gamePoints,
    cards
  }
}

export default useBoardElements