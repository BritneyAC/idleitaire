import useGameLogic from "./useGameLogic"

export default function useBoardElements(props){
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

  const ClubsElements = cards.Clubs.map((C, index) => {
    if(index === cards.Clubs.length - 1){ 
      if(C === 1){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/1.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 2){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/2.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 3){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/3.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 4){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/4.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 5){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/5.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 6){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/6.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 7){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/7.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 8){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/8.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 9){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/9.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 10){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/10.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 11){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/11.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 12){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/12.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 13){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/13.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }
  }})
  const SpadesElements = cards.Spades.map((C, index) => {
    if(index === cards.Spades.length - 1){
      if(C === 14){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/14.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 15){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/15.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 16){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/16.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 17){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/17.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 18){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/18.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 19){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/19.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 20){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/20.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 21){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/21.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 22){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/22.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 23){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/23.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 24){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/24.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 25){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/25.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 26){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/26.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }}})
  const HeartsElements = cards.Hearts.map((C, index) => {
    if(index === cards.Hearts.length - 1){ 
      if(C === 27){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/27.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 28){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/28.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 29){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/29.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 30){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/30.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 31){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/31.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 32){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/32.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 33){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/33.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 34){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/34.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 35){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/35.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 36){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/36.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 37){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/37.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 38){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/38.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 39){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/39.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }}})
  const DiamondsElements = cards.Diamonds.map((C, index) => {
    if(index === cards.Diamonds.length - 1){ 
      if(C === 40){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/40.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 41){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/41.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 42){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/42.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 43){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/43.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 44){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/44.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 45){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/45.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 46){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/46.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 47){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/47.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 48){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/48.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 49){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/49.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 50){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/50.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 51){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/51.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 52){
        return <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/52.svg").default}
          onClick={handleClick}
          alt={C}
  />}}})
  if(deck.length > 0){
    DeckElements = deck.map((C, index) => {
      if(index < 5){
    return <div className={`board--deck--card-${index}`}>
        <img
          lazy="true"
          key={C} 
          className="board--cardback"
          src={require("../cards/cardback.svg").default}
          onClick={flipCard}
          alt="cardback"
  /></div>}})} else{
    DeckElements = <div className="board--deck-empty" onClick={resetDeck}></div>
  }
  const PlayableElements = cards.Playable.map((C, index) => {
    if(index > cards.Playable.length - 4 && index < cards.Playable.length - 1){ 
      let element
      if(C === 1){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/1.svg").default}
          alt={C}
        />
      }else if(C === 2){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/2.svg").default}
          alt={C}
        />
      }else if(C === 3){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/3.svg").default}
          alt={C}
        />
      }else if(C === 4){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/4.svg").default}
          alt={C}
        />
      }else if(C === 5){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/5.svg").default}
          alt={C}
        />
      }else if(C === 6){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/6.svg").default}
          alt={C}
        />
      }else if(C === 7){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/7.svg").default}
          alt={C}
        />
      }else if(C === 8){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/8.svg").default}
          alt={C}
        />
      }else if(C === 9){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/9.svg").default}
          alt={C}
        />
      }else if(C === 10){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/10.svg").default}
          alt={C}
        />
      }else if(C === 11){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/11.svg").default}
          alt={C}
        />
      }else if(C === 12){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/12.svg").default}
          alt={C}
        />
      }else if(C === 13){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/13.svg").default}
          alt={C}
        />
      }else if(C === 14){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/14.svg").default}
          alt={C}
        />
      }else if(C === 15){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/15.svg").default}
          alt={C}
        />
      }else if(C === 16){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/16.svg").default}
          alt={C}
        />
      }else if(C === 17){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/17.svg").default}
          alt={C}
        />
      }else if(C === 18){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/18.svg").default}
          alt={C}
        />
      }else if(C === 19){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/19.svg").default}
          alt={C}
        />
      }else if(C === 20){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/20.svg").default}
          alt={C}
        />
      }else if(C === 21){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/21.svg").default}
          alt={C}
        />
      }else if(C === 22){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/22.svg").default}
          alt={C}
        />
      }else if(C === 23){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/23.svg").default}
          alt={C}
        />
      }else if(C === 24){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/24.svg").default}
          alt={C}
        />
      }else if(C === 25){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/25.svg").default}
          alt={C}
        />
      }else if(C === 26){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/26.svg").default}
          alt={C}
        />
      }else if(C === 27){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/27.svg").default}
          alt={C}
        />
      }else if(C === 28){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/28.svg").default}
          alt={C}
        />
      }else if(C === 29){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/29.svg").default}
          alt={C}
        />
      }else if(C === 30){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/30.svg").default}
          alt={C}
        />
      }else if(C === 31){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/31.svg").default}
          alt={C}
        />
      }else if(C === 32){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/32.svg").default}
          alt={C}
        />
      }else if(C === 33){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/33.svg").default}
          alt={C}
        />
      }else if(C === 34){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/34.svg").default}
          alt={C}
        />
      }else if(C === 35){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/35.svg").default}
          alt={C}
        />
      }else if(C === 36){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/36.svg").default}
          alt={C}
        />
      }else if(C === 37){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/37.svg").default}
          alt={C}
        />
      }else if(C === 38){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/38.svg").default}
          alt={C}
        />
      }else if(C === 39){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/39.svg").default}
          alt={C}
        />
      }else if(C === 40){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/40.svg").default}
          alt={C}
        />
      }else if(C === 41){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/41.svg").default}
          alt={C}
        />
      }else if(C === 42){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/42.svg").default}
          alt={C}
        />
      }else if(C === 43){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/43.svg").default}
          alt={C}
        />
      }else if(C === 44){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/44.svg").default}
          alt={C}
        />
      }else if(C === 45){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/45.svg").default}
          alt={C}
        />
      }else if(C === 46){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/46.svg").default}
          alt={C}
        />
      }else if(C === 47){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/47.svg").default}
          alt={C}
        />
      }else if(C === 48){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/48.svg").default}
          alt={C}
        />
      }else if(C === 49){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/49.svg").default}
          alt={C}
        />
      }else if(C === 50){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/50.svg").default}
          alt={C}
        />
      }else if(C === 51){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/51.svg").default}
          alt={C}
        />
      }else if(C === 52){
        element = <img
          lazy="true"
          key={C}
          id={C}
          src={require("../cards/52.svg").default}
          alt={C}
      />}
      return <div className={`board--playable-${index - cards.Playable.length + 4}`}>{element}</div>
} else if(index === cards.Playable.length - 1){
      let element
      if(C === 1){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/1.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 2){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/2.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 3){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/3.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 4){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/4.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 5){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/5.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 6){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/6.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 7){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/7.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 8){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/8.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 9){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/9.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 10){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/10.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 11){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/11.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 12){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/12.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 13){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/13.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 14){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/14.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 15){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/15.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 16){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/16.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 17){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/17.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 18){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/18.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 19){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/19.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 20){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/20.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 21){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/21.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 22){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/22.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 23){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/23.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 24){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/24.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 25){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/25.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 26){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/26.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 27){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/27.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 28){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/28.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 29){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/29.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 30){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/30.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 31){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/31.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 32){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/32.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 33){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/33.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 34){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/34.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 35){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/35.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 36){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/36.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 37){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/37.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 38){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/38.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 39){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/39.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 40){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/40.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 41){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/41.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 42){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/42.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 43){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/43.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 44){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/44.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 45){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/45.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 46){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/46.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 47){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/47.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 48){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/48.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 49){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/49.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 50){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/50.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 51){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/51.svg").default}
          onClick={handleClick}
          alt={C}
        />
      }else if(C === 52){
        element = <img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/52.svg").default}
          onClick={handleClick}
          alt={C}
        />} 
    return <div className={`board--playable-${3}`}>{element}</div>
}})
  const Column1Elements = cards.Columns[0].map((C, index) => {
    if(cards.ShownCards.includes(C)){
      if(C === 1){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/1.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 2){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/2.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 3){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/3.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 4){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/4.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 5){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/5.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 6){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/6.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 7){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/7.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 8){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/8.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 9){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/9.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 10){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/10.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 11){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/11.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 12){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/12.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 13){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/13.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 14){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/14.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 15){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/15.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 16){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/16.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 17){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
        id={C}
        className="board--card-front"
        src={require("../cards/17.svg").default}
        onClick={handleClick}
          alt={C}
      /></div>}else if(C === 18){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/18.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 19){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/19.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 20){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/20.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 21){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/21.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 22){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/22.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 23){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/23.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 24){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/24.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 25){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/25.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 26){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/26.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 27){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/27.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 28){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/28.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 29){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/29.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 30){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/30.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 31){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/31.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 32){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/32.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 33){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/33.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 34){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/34.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 35){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
        id={C}
        className="board--card-front"
          src={require("../cards/35.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 36){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/36.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 37){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/37.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 38){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/38.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 39){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/39.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 40){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/40.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 41){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/41.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 42){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/42.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 43){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/43.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 44){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/44.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 45){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/45.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 46){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/46.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 47){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/47.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 48){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/48.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 49){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/49.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 50){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/50.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 51){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/51.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 52){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/52.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}}else{
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C} 
          className="board--cardback"
          src={require("../cards/cardback.svg").default}
          alt="cardback"
  /></div>}})
  const Column2Elements = cards.Columns[1].map((C, index) => {
    if(cards.ShownCards.includes(C)){
      if(C === 1){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/1.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 2){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/2.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 3){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/3.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 4){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/4.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 5){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/5.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 6){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/6.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 7){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/7.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 8){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/8.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 9){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/9.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 10){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/10.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 11){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/11.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 12){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/12.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 13){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/13.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 14){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/14.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 15){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/15.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 16){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/16.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 17){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
        id={C}
        className="board--card-front"
        src={require("../cards/17.svg").default}
        onClick={handleClick}
          alt={C}
      /></div>}else if(C === 18){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/18.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 19){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/19.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 20){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/20.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 21){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/21.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 22){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/22.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 23){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/23.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 24){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/24.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 25){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/25.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 26){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/26.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 27){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/27.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 28){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/28.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 29){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/29.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 30){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/30.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 31){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/31.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 32){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/32.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 33){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/33.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 34){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/34.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 35){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
        id={C}
        className="board--card-front"
          src={require("../cards/35.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 36){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/36.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 37){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/37.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 38){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/38.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 39){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/39.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 40){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/40.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 41){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/41.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 42){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/42.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 43){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/43.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 44){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/44.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 45){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/45.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 46){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/46.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 47){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/47.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 48){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/48.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 49){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/49.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 50){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/50.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 51){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/51.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 52){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/52.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}}else{
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C} 
          className="board--cardback"
          src={require("../cards/cardback.svg").default}
          alt="cardback"
  /></div>}})
  const Column3Elements = cards.Columns[2].map((C, index) => {
    if(cards.ShownCards.includes(C)){
      if(C === 1){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/1.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 2){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/2.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 3){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/3.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 4){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/4.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 5){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/5.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 6){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/6.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 7){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/7.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 8){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/8.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 9){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/9.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 10){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/10.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 11){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/11.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 12){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/12.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 13){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/13.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 14){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/14.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 15){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/15.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 16){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/16.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 17){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
        id={C}
        className="board--card-front"
        src={require("../cards/17.svg").default}
        onClick={handleClick}
          alt={C}
      /></div>}else if(C === 18){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/18.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 19){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/19.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 20){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/20.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 21){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/21.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 22){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/22.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 23){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/23.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 24){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/24.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 25){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/25.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 26){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/26.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 27){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/27.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 28){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/28.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 29){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/29.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 30){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/30.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 31){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/31.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 32){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/32.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 33){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/33.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 34){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/34.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 35){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
        id={C}
        className="board--card-front"
          src={require("../cards/35.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 36){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/36.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 37){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/37.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 38){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/38.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 39){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/39.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 40){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/40.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 41){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/41.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 42){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/42.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 43){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/43.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 44){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/44.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 45){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/45.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 46){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/46.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 47){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/47.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 48){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/48.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 49){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/49.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 50){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/50.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 51){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/51.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 52){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/52.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}}else{
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C} 
          className="board--cardback"
          src={require("../cards/cardback.svg").default}
          alt="cardback"
  /></div>}})
  const Column4Elements = cards.Columns[3].map((C, index) => {
    if(cards.ShownCards.includes(C)){
      if(C === 1){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/1.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 2){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/2.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 3){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/3.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 4){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/4.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 5){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/5.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 6){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/6.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 7){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/7.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 8){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/8.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 9){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/9.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 10){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/10.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 11){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/11.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 12){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/12.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 13){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/13.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 14){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/14.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 15){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/15.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 16){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/16.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 17){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
        id={C}
        className="board--card-front"
        src={require("../cards/17.svg").default}
        onClick={handleClick}
          alt={C}
      /></div>}else if(C === 18){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/18.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 19){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/19.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 20){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/20.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 21){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/21.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 22){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/22.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 23){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/23.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 24){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/24.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 25){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/25.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 26){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/26.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 27){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/27.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 28){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/28.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 29){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/29.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 30){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/30.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 31){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/31.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 32){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/32.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 33){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/33.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 34){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/34.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 35){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
        id={C}
        className="board--card-front"
          src={require("../cards/35.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 36){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/36.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 37){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/37.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 38){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/38.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 39){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/39.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 40){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/40.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 41){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/41.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 42){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/42.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 43){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/43.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 44){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/44.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 45){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/45.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 46){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/46.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 47){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/47.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 48){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/48.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 49){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/49.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 50){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/50.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 51){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/51.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 52){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/52.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}}else{
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C} 
          className="board--cardback"
          src={require("../cards/cardback.svg").default}
          alt="cardback"
  /></div>}})
  const Column5Elements = cards.Columns[4].map((C, index) => {
    if(cards.ShownCards.includes(C)){
      if(C === 1){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/1.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 2){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/2.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 3){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/3.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 4){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/4.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 5){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/5.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 6){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/6.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 7){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/7.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 8){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/8.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 9){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/9.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 10){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/10.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 11){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/11.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 12){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/12.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 13){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/13.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 14){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/14.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 15){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/15.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 16){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/16.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 17){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
        id={C}
        className="board--card-front"
        src={require("../cards/17.svg").default}
        onClick={handleClick}
          alt={C}
      /></div>}else if(C === 18){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/18.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 19){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/19.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 20){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/20.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 21){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/21.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 22){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/22.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 23){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/23.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 24){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/24.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 25){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/25.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 26){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/26.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 27){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/27.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 28){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/28.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 29){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/29.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 30){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/30.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 31){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/31.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 32){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/32.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 33){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/33.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 34){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/34.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 35){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
        id={C}
        className="board--card-front"
          src={require("../cards/35.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 36){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/36.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 37){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/37.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 38){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/38.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 39){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/39.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 40){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/40.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 41){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/41.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 42){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/42.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 43){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/43.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 44){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/44.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 45){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/45.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 46){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/46.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 47){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/47.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 48){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/48.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 49){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/49.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 50){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/50.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 51){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/51.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 52){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/52.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}}else{
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C} 
          className="board--cardback"
          src={require("../cards/cardback.svg").default}
          alt="cardback"
  /></div>}})
  const Column6Elements = cards.Columns[5].map((C, index) => {
    if(cards.ShownCards.includes(C)){
      if(C === 1){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/1.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 2){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/2.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 3){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/3.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 4){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/4.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 5){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/5.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 6){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/6.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 7){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/7.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 8){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/8.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 9){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/9.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 10){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/10.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 11){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/11.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 12){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/12.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 13){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/13.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 14){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/14.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 15){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/15.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 16){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/16.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 17){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
        id={C}
        className="board--card-front"
        src={require("../cards/17.svg").default}
        onClick={handleClick}
          alt={C}
      /></div>}else if(C === 18){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/18.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 19){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/19.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 20){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/20.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 21){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/21.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 22){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/22.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 23){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/23.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 24){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/24.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 25){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/25.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 26){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/26.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 27){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/27.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 28){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/28.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 29){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/29.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 30){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/30.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 31){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/31.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 32){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/32.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 33){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/33.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 34){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/34.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 35){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
        id={C}
        className="board--card-front"
          src={require("../cards/35.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 36){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/36.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 37){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/37.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 38){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/38.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 39){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/39.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 40){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/40.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 41){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/41.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 42){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/42.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 43){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/43.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 44){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/44.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 45){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/45.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 46){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/46.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 47){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/47.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 48){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/48.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 49){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/49.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 50){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/50.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 51){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/51.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 52){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/52.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}}else{
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C} 
          className="board--cardback"
          src={require("../cards/cardback.svg").default}
          alt="cardback"
  /></div>}})
  const Column7Elements = cards.Columns[6].map((C, index) => {
    if(cards.ShownCards.includes(C)){
      if(C === 1){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/1.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 2){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/2.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 3){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/3.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 4){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/4.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 5){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/5.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 6){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/6.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 7){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/7.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 8){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/8.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 9){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/9.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 10){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/10.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 11){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/11.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 12){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/12.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 13){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/13.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 14){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/14.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 15){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/15.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 16){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/16.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 17){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
        id={C}
        className="board--card-front"
        src={require("../cards/17.svg").default}
        onClick={handleClick}
          alt={C}
      /></div>}else if(C === 18){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/18.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 19){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/19.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 20){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/20.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 21){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/21.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 22){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/22.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 23){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/23.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 24){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/24.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 25){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/25.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 26){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/26.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 27){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/27.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 28){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/28.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 29){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/29.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 30){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/30.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 31){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/31.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 32){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/32.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 33){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/33.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 34){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/34.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 35){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
        id={C}
        className="board--card-front"
          src={require("../cards/35.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 36){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/36.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 37){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/37.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 38){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/38.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 39){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/39.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 40){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/40.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 41){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/41.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 42){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/42.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 43){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/43.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 44){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/44.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 45){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/45.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 46){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/46.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 47){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/47.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 48){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/48.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 49){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/49.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 50){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/50.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 51){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
        key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/51.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}else if(C === 52){
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C}
          id={C}
          className="board--card-front"
          src={require("../cards/52.svg").default}
          onClick={handleClick}
          alt={C}
      /></div>}}else{
        return <div className={`board--column--card-${index}`}><img
          lazy="true"
          key={C} 
          className="board--cardback"
          src={require("../cards/cardback.svg").default}
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