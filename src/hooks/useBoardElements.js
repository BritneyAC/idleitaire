import useGameLogic from "./useGameLogic"

export default function useBoardElements(props){
  const {deck, 
    cards, 
    handleClick,
    isGameRunning,
    RestartGame,
    StartGame
  } = useGameLogic(props)

  const ClubsElements = cards.Clubs.map(C, index => index === cards.Clubs.length - 1 && <img 
    id={C} 
    src={`./${C}`} 
    draggable="true" 
    onClick={handleClick}
  />)
  const HeartsElements = cards.Hearts.map(C, index => index === cards.Hearts.length - 1 && <img 
      id={C} 
      src={`./${C}`} 
      draggable="true" 
      onClick={handleClick}
    />)
  const DiamondsElements = cards.Diamonds.map(C, index => index === cards.Diamonds.length - 1 && <img 
      id={C} 
      src={`./${C}`} 
      draggable="true" 
      onClick={handleClick}
    />)
  const SpadesElements = cards.Spades.map(C, index => index === cards.Spades.length - 1 && <img 
      id={C} 
      src={`./${C}`} 
      draggable="true" 
      onClick={handleClick}
    />)
  const DeckElements = deck.map(C,index => index < 5 && <img 
      id={C} 
      src="./cardBack" 
      draggable="true" 
      onClick={handleClick}
    />)
  const PlayableElements = cards.Playable.map(C, index => index < 3 && <img 
      id={C} 
      src={`./${C}`} 
      draggable="true" 
      onClick={handleClick}
    />)
  const Column1Elements = cards.Column1.map(C => cards.ShownCards.includes(C) ? <img 
    id={C} 
    src={`./${C}`} 
    draggable="true" 
    onClick={handleClick}
  /> : <img 
    id={C} 
    scr="./cardBack" 
    draggable="true" 
    onClick={handleClick}
  />)
  const Column2Elements = cards.Column2.map(C => cards.ShownCards.includes(C) ? <img 
    id={C} 
    src={`./${C}`} 
    draggable="true" 
    onClick={handleClick}
  /> : <img 
    id={C} 
    scr="./cardBack" 
    draggable="true" 
    onClick={handleClick}
  />)
  const Column3Elements = cards.Column3.map(C => cards.ShownCards.includes(C) ? <img 
    id={C} 
    src={`./${C}`} 
    draggable="true" 
    onClick={handleClick}
  /> : <img 
    id={C} 
    scr="./cardBack" 
    draggable="true" 
    onClick={handleClick}
  />)
  const Column4Elements = cards.Column4.map(C => cards.ShownCards.includes(C) ? <img 
    id={C} 
    src={`./${C}`} 
    draggable="true" 
    onClick={handleClick}
  /> : <img 
    id={C} 
    scr="./cardBack" 
    draggable="true" 
    onClick={handleClick}
  />)
  const Column5Elements = cards.Column5.map(C => cards.ShownCards.includes(C) ? <img 
    id={C} 
    src={`./${C}`} 
    draggable="true" 
    onClick={handleClick}
  /> : <img 
    id={C} 
    scr="./cardBack" 
    draggable="true" 
    onClick={handleClick}
  />)
  const Column6Elements = cards.Column6.map(C => cards.ShownCards.includes(C) ? <img 
    id={C} 
    src={`./${C}`} 
    draggable="true" 
    onClick={handleClick}
  /> : <img 
    id={C} 
    scr="./cardBack" 
    draggable="true" 
    onClick={handleClick}
  />)
  const Column7Elements = cards.Column7.map(C => cards.ShownCards.includes(C) ? <img 
    id={C} 
    src={`./${C}`} 
    draggable="true" 
    onClick={handleClick}
  /> : <img 
    id={C} 
    scr="./cardBack" 
    draggable="true" 
    onClick={handleClick}
  />)
  
  return{
    ClubsElements, 
    DiamondsElements, 
    HeartsElements, 
    SpadesElements, 
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
    StartGame
  }
}