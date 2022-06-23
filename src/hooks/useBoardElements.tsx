import React from "react"
import Image from "next/image"
import useGameLogic, { card } from "./useGameLogic"
import { User } from "./useUserInfo"
import styles from "@/styles/BoardElement.module.css"
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
  saveUserInfo: ()=>void
  userInfo: User,
  isInfoShown: boolean
}

const useBoardElements= (props: UseBoardElementsProps) => {
  const {deck, 
    cards, 
    handleClick,
    flipCard,
    resetDeck,
    undoMove,
    isGameRunning,
    RestartGame,
    StartGame,
    gamePoints
  } = useGameLogic({...props})

  let DeckElements

  const ClubsElements = cards.Clubs.map((C: number, index: number) => {
    if(index === cards.Clubs.length - 1){ 
      if(C === 1){
        return <AceOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 2){
        return <TwoOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 3){
        return <ThreeOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 4){
        return <FourOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 5){
        return <FiveOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 6){
        return <SixOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 7){
        return <SevenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 8){
        return <EightOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 9){
        return <NineOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 10){
        return <TenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 11){
        return <JackOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 12){
        return <QueenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 13){
        return <KingOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }
  }})
  const SpadesElements = cards.Spades.map((C: number, index: number) => {
    if(index === cards.Spades.length - 1){
      if(C === 14){
        return <AceOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 15){
        return <TwoOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 16){
        return <ThreeOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 17){
        return <FourOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 18){
        return <FiveOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 19){
        return <SixOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 20){
        return <SevenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 21){
        return <EightOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 22){
        return <NineOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 23){
        return <TenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 24){
        return <JackOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 25){
        return <QueenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 26){
        return <KingOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }}})
  const HeartsElements = cards.Hearts.map((C: number, index: number) => {
    if(index === cards.Hearts.length - 1){ 
      if(C === 27){
        return <AceOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 28){
        return <TwoOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 29){
        return <ThreeOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 30){
        return <FourOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 31){
        return <FiveOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 32){
        return <SixOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 33){
        return <SevenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 34){
        return <EightOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 35){
        return <NineOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 36){
        return <TenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 37){
        return <JackOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 38){
        return <QueenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 39){
        return <KingOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }}})
  const DiamondsElements = cards.Diamonds.map((C: number, index: number) => {
    if(index === cards.Diamonds.length - 1){ 
      if(C === 40){
        return <AceOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 41){
        return <TwoOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 42){
        return <ThreeOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 43){
        return <FourOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 44){
        return <FiveOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 45){
        return <SixOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 46){
        return <SevenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 47){
        return <EightOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 48){
        return <NineOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 49){
        return <TenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 50){
        return <JackOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 51){
        return <QueenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 52){
        return <KingOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
  />}}})
  if(deck.length > 0){
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
        return <div className={style}>
          <Cardback
            loading="lazy"
            key={C} 
            className={styles.mainCardFront}
            onClick={flipCard}
            alt="cardback"
  /></div>}})} else{
    DeckElements = <div className={styles.deckEmpty} onClick={resetDeck}></div>
  }
  const PlayableElements = cards.Playable.map((C: number, index: number) => {
    if(index > cards.Playable.length - 4 && index < cards.Playable.length - 1){ 
      let element
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
      if(C === 1){
        element = <AceOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 2){
        element = <TwoOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 3){
        element = <ThreeOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 4){
        element = <FourOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 5){
        element = <FiveOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 6){
        element = <SixOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 7){
        element = <SevenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 8){
        element = <EightOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 9){
        element = <NineOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 10){
        element = <TenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 11){
        element = <JackOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 12){
        element = <QueenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 13){
        element = <KingOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 14){
        element = <AceOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 15){
        element = <TwoOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 16){
        element = <ThreeOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 17){
        element = <FourOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 18){
        element = <FiveOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 19){
        element = <SixOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 20){
        element = <SevenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 21){
        element = <EightOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 22){
        element = <NineOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 23){
        element = <TenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 24){
        element = <JackOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 25){
        element = <QueenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 26){
        element = <KingOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 27){
        element = <AceOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 28){
        element = <TwoOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 29){
        element = <ThreeOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 30){
        element = <FourOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 31){
        element = <FiveOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 32){
        element = <SixOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 33){
        element = <SevenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 34){
        element = <EightOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 35){
        element = <NineOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 36){
        element = <TenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 37){
        element = <JackOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 38){
        element = <QueenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 39){
        element = <KingOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 40){
        element = <AceOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 41){
        element = <TwoOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 42){
        element = <ThreeOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 43){
        element = <FourOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 44){
        element = <FiveOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 45){
        element = <SixOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 46){
        element = <SevenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 47){
        element = <EightOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 48){
        element = <NineOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 49){
        element = <TenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 50){
        element = <JackOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 51){
        element = <QueenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
        />
      }else if(C === 52){
        element = <KingOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          alt={`${C}`}
      />}
      return <div className={`board--playable-${index - cards.Playable.length + 4}`}>{element}</div>
} else if(index === cards.Playable.length - 1){
      let element
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
if(C === 1){
        element = <AceOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 2){
        element = <TwoOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 3){
        element = <ThreeOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 4){
        element = <FourOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 5){
        element = <FiveOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 6){
        element = <SixOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 7){
        element = <SevenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 8){
        element = <EightOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 9){
        element = <NineOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 10){
        element = <TenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 11){
        element = <JackOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 12){
        element = <QueenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 13){
        element = <KingOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 14){
        element = <AceOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 15){
        element = <TwoOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 16){
        element = <ThreeOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 17){
        element = <FourOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 18){
        element = <FiveOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 19){
        element = <SixOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 20){
        element = <SevenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 21){
        element = <EightOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 22){
        element = <NineOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 23){
        element = <TenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 24){
        element = <JackOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 25){
        element = <QueenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 26){
        element = <KingOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 27){
        element = <AceOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 28){
        element = <TwoOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 29){
        element = <ThreeOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 30){
        element = <FourOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 31){
        element = <FiveOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 32){
        element = <SixOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 33){
        element = <SevenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 34){
        element = <EightOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 35){
        element = <NineOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 36){
        element = <TenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 37){
        element = <JackOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 38){
        element = <QueenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 39){
        element = <KingOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 40){
        element = <AceOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 41){
        element = <TwoOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 42){
        element = <ThreeOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 43){
        element = <FourOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 44){
        element = <FiveOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 45){
        element = <SixOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 46){
        element = <SevenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 47){
        element = <EightOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 48){
        element = <NineOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 49){
        element = <TenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 50){
        element = <JackOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 51){
        element = <QueenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />
      }else if(C === 52){
        element = <KingOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.cardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
        />} 
    return <div className={`board--playable-${3}`}>{element}</div>
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
        return <div className={style}><AceOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 2){
        return <div className={style}><TwoOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 3){
        return <div className={style}><ThreeOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 4){
        return <div className={style}><FourOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 5){
        return <div className={style}><FiveOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 6){
        return <div className={style}><SixOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 7){
        return <div className={style}><SevenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 8){
        return <div className={style}><EightOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 9){
        return <div className={style}><NineOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 10){
        return <div className={style}><TenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 11){
        return <div className={style}><JackOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 12){
        return <div className={style}><QueenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 13){
        return <div className={style}><KingOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 14){
        return <div className={style}><AceOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 15){
        return <div className={style}><TwoOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 16){
        return <div className={style}><ThreeOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 17){
        return <div className={style}><FourOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
        onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 18){
        return <div className={style}><FiveOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 19){
        return <div className={style}><SixOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 20){
        return <div className={style}><SevenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 21){
        return <div className={style}><EightOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 22){
        return <div className={style}><NineOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 23){
        return <div className={style}><TenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 24){
        return <div className={style}><JackOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 25){
        return <div className={style}><QueenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 26){
        return <div className={style}><KingOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 27){
        return <div className={style}><AceOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 28){
        return <div className={style}><TwoOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 29){
        return <div className={style}><ThreeOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 30){
        return <div className={style}><FourOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 31){
        return <div className={style}><FiveOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 32){
        return <div className={style}><SixOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 33){
        return <div className={style}><SevenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 34){
        return <div className={style}><EightOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 35){
        return <div className={style}><NineOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 36){
        return <div className={style}><TenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 37){
        return <div className={style}><JackOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 38){
        return <div className={style}><QueenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 39){
        return <div className={style}><KingOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 40){
        return <div className={style}><AceOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 41){
        return <div className={style}><TwoOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 42){
        return <div className={style}><ThreeOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 43){
        return <div className={style}><FourOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 44){
        return <div className={style}><FiveOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 45){
        return <div className={style}><SixOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 46){
        return <div className={style}><SevenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 47){
        return <div className={style}><EightOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 48){
        return <div className={style}><NineOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 49){
        return <div className={style}><TenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 50){
        return <div className={style}><JackOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 51){
        return <div className={style}><QueenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 52){
        return <div className={style}><KingOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}}else{
        return <div className={style}><Cardback
          loading="lazy"
          key={C} 
          className={styles.mainCardFront}
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
        return <div className={style}><AceOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 2){
        return <div className={style}><TwoOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 3){
        return <div className={style}><ThreeOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 4){
        return <div className={style}><FourOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 5){
        return <div className={style}><FiveOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 6){
        return <div className={style}><SixOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 7){
        return <div className={style}><SevenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 8){
        return <div className={style}><EightOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 9){
        return <div className={style}><NineOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 10){
        return <div className={style}><TenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 11){
        return <div className={style}><JackOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 12){
        return <div className={style}><QueenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 13){
        return <div className={style}><KingOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 14){
        return <div className={style}><AceOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 15){
        return <div className={style}><TwoOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 16){
        return <div className={style}><ThreeOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 17){
        return <div className={style}><FourOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
        onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 18){
        return <div className={style}><FiveOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 19){
        return <div className={style}><SixOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 20){
        return <div className={style}><SevenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 21){
        return <div className={style}><EightOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 22){
        return <div className={style}><NineOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 23){
        return <div className={style}><TenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 24){
        return <div className={style}><JackOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 25){
        return <div className={style}><QueenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 26){
        return <div className={style}><KingOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 27){
        return <div className={style}><AceOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 28){
        return <div className={style}><TwoOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 29){
        return <div className={style}><ThreeOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 30){
        return <div className={style}><FourOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 31){
        return <div className={style}><FiveOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 32){
        return <div className={style}><SixOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 33){
        return <div className={style}><SevenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 34){
        return <div className={style}><EightOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 35){
        return <div className={style}><NineOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 36){
        return <div className={style}><TenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 37){
        return <div className={style}><JackOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 38){
        return <div className={style}><QueenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 39){
        return <div className={style}><KingOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 40){
        return <div className={style}><AceOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 41){
        return <div className={style}><TwoOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 42){
        return <div className={style}><ThreeOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 43){
        return <div className={style}><FourOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 44){
        return <div className={style}><FiveOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 45){
        return <div className={style}><SixOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 46){
        return <div className={style}><SevenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 47){
        return <div className={style}><EightOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 48){
        return <div className={style}><NineOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 49){
        return <div className={style}><TenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 50){
        return <div className={style}><JackOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 51){
        return <div className={style}><QueenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 52){
        return <div className={style}><KingOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}}else{
        return <div className={style}><Cardback
          loading="lazy"
          key={C} 
          className={styles.mainCardFront}
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
        return <div className={style}><AceOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 2){
        return <div className={style}><TwoOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 3){
        return <div className={style}><ThreeOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 4){
        return <div className={style}><FourOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 5){
        return <div className={style}><FiveOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 6){
        return <div className={style}><SixOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 7){
        return <div className={style}><SevenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 8){
        return <div className={style}><EightOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 9){
        return <div className={style}><NineOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 10){
        return <div className={style}><TenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 11){
        return <div className={style}><JackOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 12){
        return <div className={style}><QueenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 13){
        return <div className={style}><KingOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 14){
        return <div className={style}><AceOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 15){
        return <div className={style}><TwoOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 16){
        return <div className={style}><ThreeOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 17){
        return <div className={style}><FourOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
        onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 18){
        return <div className={style}><FiveOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 19){
        return <div className={style}><SixOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 20){
        return <div className={style}><SevenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 21){
        return <div className={style}><EightOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 22){
        return <div className={style}><NineOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 23){
        return <div className={style}><TenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 24){
        return <div className={style}><JackOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 25){
        return <div className={style}><QueenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 26){
        return <div className={style}><KingOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 27){
        return <div className={style}><AceOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 28){
        return <div className={style}><TwoOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 29){
        return <div className={style}><ThreeOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 30){
        return <div className={style}><FourOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 31){
        return <div className={style}><FiveOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 32){
        return <div className={style}><SixOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 33){
        return <div className={style}><SevenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 34){
        return <div className={style}><EightOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 35){
        return <div className={style}><NineOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 36){
        return <div className={style}><TenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 37){
        return <div className={style}><JackOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 38){
        return <div className={style}><QueenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 39){
        return <div className={style}><KingOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 40){
        return <div className={style}><AceOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 41){
        return <div className={style}><TwoOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 42){
        return <div className={style}><ThreeOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 43){
        return <div className={style}><FourOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 44){
        return <div className={style}><FiveOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 45){
        return <div className={style}><SixOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 46){
        return <div className={style}><SevenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 47){
        return <div className={style}><EightOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 48){
        return <div className={style}><NineOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 49){
        return <div className={style}><TenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 50){
        return <div className={style}><JackOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 51){
        return <div className={style}><QueenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 52){
        return <div className={style}><KingOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}}else{
        return <div className={style}><Cardback
          loading="lazy"
          key={C} 
          className={styles.mainCardFront}
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
        return <div className={style}><AceOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 2){
        return <div className={style}><TwoOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 3){
        return <div className={style}><ThreeOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 4){
        return <div className={style}><FourOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 5){
        return <div className={style}><FiveOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 6){
        return <div className={style}><SixOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 7){
        return <div className={style}><SevenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 8){
        return <div className={style}><EightOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 9){
        return <div className={style}><NineOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 10){
        return <div className={style}><TenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 11){
        return <div className={style}><JackOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 12){
        return <div className={style}><QueenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 13){
        return <div className={style}><KingOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 14){
        return <div className={style}><AceOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 15){
        return <div className={style}><TwoOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 16){
        return <div className={style}><ThreeOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 17){
        return <div className={style}><FourOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
        onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 18){
        return <div className={style}><FiveOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 19){
        return <div className={style}><SixOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 20){
        return <div className={style}><SevenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 21){
        return <div className={style}><EightOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 22){
        return <div className={style}><NineOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 23){
        return <div className={style}><TenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 24){
        return <div className={style}><JackOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 25){
        return <div className={style}><QueenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 26){
        return <div className={style}><KingOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 27){
        return <div className={style}><AceOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 28){
        return <div className={style}><TwoOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 29){
        return <div className={style}><ThreeOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 30){
        return <div className={style}><FourOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 31){
        return <div className={style}><FiveOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 32){
        return <div className={style}><SixOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 33){
        return <div className={style}><SevenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 34){
        return <div className={style}><EightOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 35){
        return <div className={style}><NineOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 36){
        return <div className={style}><TenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 37){
        return <div className={style}><JackOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 38){
        return <div className={style}><QueenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 39){
        return <div className={style}><KingOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 40){
        return <div className={style}><AceOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 41){
        return <div className={style}><TwoOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 42){
        return <div className={style}><ThreeOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 43){
        return <div className={style}><FourOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 44){
        return <div className={style}><FiveOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 45){
        return <div className={style}><SixOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 46){
        return <div className={style}><SevenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 47){
        return <div className={style}><EightOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 48){
        return <div className={style}><NineOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 49){
        return <div className={style}><TenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 50){
        return <div className={style}><JackOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 51){
        return <div className={style}><QueenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 52){
        return <div className={style}><KingOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}}else{
        return <div className={style}><Cardback
          loading="lazy"
          key={C} 
          className={styles.mainCardFront}
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
        return <div className={style}><AceOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 2){
        return <div className={style}><TwoOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 3){
        return <div className={style}><ThreeOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 4){
        return <div className={style}><FourOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 5){
        return <div className={style}><FiveOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 6){
        return <div className={style}><SixOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 7){
        return <div className={style}><SevenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 8){
        return <div className={style}><EightOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 9){
        return <div className={style}><NineOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 10){
        return <div className={style}><TenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 11){
        return <div className={style}><JackOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 12){
        return <div className={style}><QueenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 13){
        return <div className={style}><KingOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 14){
        return <div className={style}><AceOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 15){
        return <div className={style}><TwoOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 16){
        return <div className={style}><ThreeOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 17){
        return <div className={style}><FourOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
        onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 18){
        return <div className={style}><FiveOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 19){
        return <div className={style}><SixOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 20){
        return <div className={style}><SevenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 21){
        return <div className={style}><EightOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 22){
        return <div className={style}><NineOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 23){
        return <div className={style}><TenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 24){
        return <div className={style}><JackOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 25){
        return <div className={style}><QueenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 26){
        return <div className={style}><KingOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 27){
        return <div className={style}><AceOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 28){
        return <div className={style}><TwoOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 29){
        return <div className={style}><ThreeOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 30){
        return <div className={style}><FourOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 31){
        return <div className={style}><FiveOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 32){
        return <div className={style}><SixOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 33){
        return <div className={style}><SevenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 34){
        return <div className={style}><EightOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 35){
        return <div className={style}><NineOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 36){
        return <div className={style}><TenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 37){
        return <div className={style}><JackOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 38){
        return <div className={style}><QueenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 39){
        return <div className={style}><KingOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 40){
        return <div className={style}><AceOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 41){
        return <div className={style}><TwoOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 42){
        return <div className={style}><ThreeOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 43){
        return <div className={style}><FourOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 44){
        return <div className={style}><FiveOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 45){
        return <div className={style}><SixOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 46){
        return <div className={style}><SevenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 47){
        return <div className={style}><EightOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 48){
        return <div className={style}><NineOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 49){
        return <div className={style}><TenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 50){
        return <div className={style}><JackOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 51){
        return <div className={style}><QueenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 52){
        return <div className={style}><KingOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}}else{
        return <div className={style}><Cardback
          loading="lazy"
          key={C} 
          className={styles.mainCardFront}
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
        return <div className={style}><AceOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 2){
        return <div className={style}><TwoOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 3){
        return <div className={style}><ThreeOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 4){
        return <div className={style}><FourOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 5){
        return <div className={style}><FiveOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 6){
        return <div className={style}><SixOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 7){
        return <div className={style}><SevenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 8){
        return <div className={style}><EightOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 9){
        return <div className={style}><NineOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 10){
        return <div className={style}><TenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 11){
        return <div className={style}><JackOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 12){
        return <div className={style}><QueenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 13){
        return <div className={style}><KingOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 14){
        return <div className={style}><AceOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 15){
        return <div className={style}><TwoOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 16){
        return <div className={style}><ThreeOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 17){
        return <div className={style}><FourOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
        onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 18){
        return <div className={style}><FiveOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 19){
        return <div className={style}><SixOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 20){
        return <div className={style}><SevenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 21){
        return <div className={style}><EightOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 22){
        return <div className={style}><NineOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 23){
        return <div className={style}><TenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 24){
        return <div className={style}><JackOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 25){
        return <div className={style}><QueenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 26){
        return <div className={style}><KingOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 27){
        return <div className={style}><AceOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 28){
        return <div className={style}><TwoOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 29){
        return <div className={style}><ThreeOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 30){
        return <div className={style}><FourOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 31){
        return <div className={style}><FiveOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 32){
        return <div className={style}><SixOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 33){
        return <div className={style}><SevenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 34){
        return <div className={style}><EightOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 35){
        return <div className={style}><NineOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 36){
        return <div className={style}><TenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 37){
        return <div className={style}><JackOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 38){
        return <div className={style}><QueenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 39){
        return <div className={style}><KingOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 40){
        return <div className={style}><AceOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 41){
        return <div className={style}><TwoOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 42){
        return <div className={style}><ThreeOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 43){
        return <div className={style}><FourOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 44){
        return <div className={style}><FiveOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 45){
        return <div className={style}><SixOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 46){
        return <div className={style}><SevenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 47){
        return <div className={style}><EightOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 48){
        return <div className={style}><NineOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 49){
        return <div className={style}><TenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 50){
        return <div className={style}><JackOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 51){
        return <div className={style}><QueenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 52){
        return <div className={style}><KingOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}}else{
        return <div className={style}><Cardback
          loading="lazy"
          key={C} 
          className={styles.mainCardFront}
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
        return <div className={style}><AceOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 2){
        return <div className={style}><TwoOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 3){
        return <div className={style}><ThreeOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 4){
        return <div className={style}><FourOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 5){
        return <div className={style}><FiveOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 6){
        return <div className={style}><SixOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 7){
        return <div className={style}><SevenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 8){
        return <div className={style}><EightOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 9){
        return <div className={style}><NineOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 10){
        return <div className={style}><TenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 11){
        return <div className={style}><JackOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 12){
        return <div className={style}><QueenOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 13){
        return <div className={style}><KingOfClubs
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 14){
        return <div className={style}><AceOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 15){
        return <div className={style}><TwoOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 16){
        return <div className={style}><ThreeOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 17){
        return <div className={style}><FourOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
        onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 18){
        return <div className={style}><FiveOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 19){
        return <div className={style}><SixOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 20){
        return <div className={style}><SevenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 21){
        return <div className={style}><EightOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 22){
        return <div className={style}><NineOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 23){
        return <div className={style}><TenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 24){
        return <div className={style}><JackOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 25){
        return <div className={style}><QueenOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 26){
        return <div className={style}><KingOfSpades
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 27){
        return <div className={style}><AceOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 28){
        return <div className={style}><TwoOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 29){
        return <div className={style}><ThreeOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 30){
        return <div className={style}><FourOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 31){
        return <div className={style}><FiveOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 32){
        return <div className={style}><SixOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 33){
        return <div className={style}><SevenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 34){
        return <div className={style}><EightOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 35){
        return <div className={style}><NineOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 36){
        return <div className={style}><TenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 37){
        return <div className={style}><JackOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 38){
        return <div className={style}><QueenOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 39){
        return <div className={style}><KingOfHearts
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 40){
        return <div className={style}><AceOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 41){
        return <div className={style}><TwoOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 42){
        return <div className={style}><ThreeOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 43){
        return <div className={style}><FourOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 44){
        return <div className={style}><FiveOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 45){
        return <div className={style}><SixOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 46){
        return <div className={style}><SevenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 47){
        return <div className={style}><EightOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 48){
        return <div className={style}><NineOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 49){
        return <div className={style}><TenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 50){
        return <div className={style}><JackOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 51){
        return <div className={style}><QueenOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}else if(C === 52){
        return <div className={style}><KingOfDiamonds
          loading="lazy"
          key={C}
          id={`${C}`}
          className={styles.mainCardFront}
          onClick={()=>handleClick(C)}
          alt={`${C}`}
      /></div>}}else{
        return <div className={style}><Cardback
          loading="lazy"
          key={C} 
          className={styles.mainCardFront}
          alt="cardback"
  /></div>}})
  
  return{
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
    isGameRunning,
    RestartGame,
    StartGame,
    undoMove,
    gamePoints,
    cards
  }
}

export default useBoardElements