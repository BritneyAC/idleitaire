export default function useGameLogic(props){
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [deck, setDeck] = useState([])
  const [cards, setCards] = useState([])
  const [gamePoints, setGamePoints] = useState(0)

  //potentially refactor columns into an array of arrays to reduce code
  class card {
    Playable = []
    Clubs = []
    Hearts = []
    Diamonds = []
    Spades = []
    ShownCards = []
    Column1 = []
    Column2 = []
    Column3 = []
    Column4 = []
    Column5 = []
    Column6 =[]
    Column7 = []

    StartColumns = () => {
      const newDeck = [...deck]
      const newColumn1 = []
      const newColumn2 = []
      const newColumn3 = []
      const newColumn4 = []
      const newColumn5 = []
      const newColumn6 = []
      const newColumn7 = []
      const newShownCards = []
      for(let i = 0; i < 6; i++){
        newColumn7.push(newDeck.pop())
        i > 0 && newColumn6.push(newDeck.pop())
        i > 1 && newColumn5.push(newDeck.pop())
        i > 2 && newColumn4.push(newDeck.pop())
        i > 3 && newColumn3.push(newDeck.pop())
        i > 4 && newColumn2.push(newDeck.pop())
        if(i > 5){
          newColumn1.push(newDeck.pop())
          newShownCards.push(
            newColumn1[newColumn1.length - 1], 
            newColumn2[newColumn2.length - 1],
            newColumn3[newColumn3.length - 1],
            newColumn4[newColumn4.length - 1],
            newColumn5[newColumn5.length - 1],
            newColumn6[newColumn6.length - 1],
            newColumn7[newColumn7.length - 1]
          )
        }
      }
      const newCards = {
        ...cards,
        Column1: newColumn1,
        Column2: newColumn2,
        Column3: newColumn3,
        Column4: newColumn4,
        Column5: newColumn5,
        Column6: newColumn6,
        Column7: newColumn7,
        ShownCards: newShownCards
      }
      newCards.Playable.push(newDeck.pop())
      newCards.ShownCards.push(newCards.Playable[0])
      setDeck(newDeck)
      setCards(newCards)
    }
  }


  useEffect(() => {
    if(isGameRunning){
      setGamePoints(prevPoints => prevPoints + 10)
    }
  }, [cards.Clubs, cards.Hearts, cards.Diamonds, cards.Spades])

  const NewDeck = () => {
    const newDeck = []
    for(let i = 1; i <= 52; i++){
      const newCard = [i, false]
      newDeck.push(newCard)
    }
    return newDeck
  }

  const ShuffleDeck = () => {
    setDeck(prevDeck => {
      const newDeck = []
      const heldDeck = [...prevDeck]
      for(let i = 0; i < heldDeck.length; i){
        newDeck.push(heldDeck.splice(Math.floor(Math.random()) * heldDeck.length, 1))
      }
      return newDeck
    })
  }

  //win condition checker
  useEffect(() =>{
    if(cards.Clubs.length === 13, cards.Hearts.length === 13, cards.Diamonds.length === 13, cards.Spades.length === 13){
      props.gamesWonIncreased()
      setGamePoints(prevPoints => prevPoints + 520)
      EndGame()
    }
  }, [cards.Clubs, cards.Hearts, cards.Diamonds, cards.Spades])

  const StartGame = () => {
    deck.length !== 52 && setDeck(NewDeck())
    ShuffleDeck()
    setCards(new card())
    setIsGameRunning(true)
    setGamePoints(0)
    cards.StartColumns()
  }

  const RestartGame = () => {
    EndGame()
    StartGame()
  }

  const EndGame = () => {
    setIsGameRunning(false)
    props.setUserInfo(prevInfo => 
      ({...prevInfo, userPoints: prevInfo.userPoints + points})
    )
  }

  // Removes and returns the passed card from where it is currently stored 
  const removeFromPile = (cardToRemove) => {
    const newCards = {...cards}
    let removedCard
    switch (cardToRemove) {
      case cards.Playable[cards.Playable.length - 1]:
        removedCard = newCards.Playable.pop()
        setCards(newCards)
        return removedCard
      case cards.Clubs[cards.Clubs.length - 1]:
        removedCard = newCards.Clubs.pop()
        setCards(newCards)
        return removedCard
      case cards.Hearts[cards.Hearts.length - 1]:
        removedCard = newCards.Hearts.pop()
        setCards(newCards)
        return removedCard
      case cards.Diamonds[cards.Diamonds.length - 1]:
        removedCard = newCards.Diamonds.pop()
        setCards(newCards)
        return removedCard
      case cards.Spades[cards.Spades.length - 1]:
        removedCard = newCards.Spades.pop()
        setCards(newCards)
        return removedCard
      case cards.Column1[cards.Column1.length - 1]:
        removedCard = newCards.Column1.pop()
        setCards(newCards)
        return removedCard
      case cards.Column2[cards.Column2.length - 1]:
        removedCard = newCards.Column2.pop()
        setCards(newCards)
        return removedCard
      case cards.Column3[cards.Column3.length - 1]:
        removedCard = newCards.Column3.pop()
        setCards(newCards)
        return removedCard
      case cards.Column4[cards.Column4.length - 1]:
        removedCard = newCards.Column4.pop()
        setCards(newCards)
        return removedCard
      case cards.Column5[cards.Column5.length - 1]:
        removedCard = newCards.Column5.pop()
        setCards(newCards)
        return removedCard
      case cards.Column6[cards.Column6.length - 1]:
        removedCard = newCards.Column6.pop()
        setCards(newCards)
        return removedCard
      case cards.Column7[cards.Column7.length - 1]:
        removedCard = newCards.Column7.pop()
        setCards(newCards)
        return removedCard

      default:
        break
    }
  }

  // acctually impliment cards going to where they can
  const searchPlaceble = (clickedCard) => {
    const newCards = {...cards}
    switch(clickedCard){
      case 1 || cards.Clubs[cards.Clubs.length - 1] + 1:
        newCards.Clubs.push(removeFromPile(clickedCard))
        setCards(newCards)
        break  
      case 14 || cards.Hearts[cards.Hearts.length - 1] + 1:
        newCards.Hearts.push(removeFromPile(clickedCard))
        setCards(newCards)
        break  
      case 27 || cards.Diamonds[cards.Diamonds.length - 1] + 1:
        newCards.Diamonds.push(removeFromPile(clickedCard))
        setCards(newCards)
        break  
      case 40 || cards.Spades[cards.Spades.length - 1] + 1:
        newCards.Spades.push(removeFromPile(clickedCard))
        setCards(newCards)
        break

      //kings, moved to empty column(if statements) and not to an ace(ending break)
      case 13 || 26 || 39 || 52:
        if(cards.Column1.length === 0){
          newCards.Column1.push(removeFromPile(clickedCard))
          setCards(newCards)
          break
        } else if(cards.Column2.length === 0){
          newCards.Column2.push(removeFromPile(clickedCard))
          setCards(newCards)
          break
        } else if(cards.Column3.length === 0){
          newCards.Column3.push(removeFromPile(clickedCard))
          setCards(newCards)
          break
        } else if(cards.Column4.length === 0){
          newCards.Column4.push(removeFromPile(clickedCard))
          setCards(newCards)
          break
        } else if(cards.Column5.length === 0){
          newCards.Column5.push(removeFromPile(clickedCard))
          setCards(newCards)
          break
        } else if(cards.Column6.length === 0){
          newCards.Column6.push(removeFromPile(clickedCard))
          setCards(newCards)
          break
        } else if(cards.Column7.length === 0){
          newCards.Column7.push(removeFromPile(clickedCard))
          setCards(newCards)
          break
        }
        break

      case cards.Column1[cards.Column1.length - 1] - 1:
        newCards.Column1.push(removeFromPile(clickedCard))
        setCards(newCards)
        break
      case cards.Column2[cards.Column2.length - 1] - 1:
        newCards.Column2.push(removeFromPile(clickedCard))
        setCards(newCards)
        break
      case cards.Column3[cards.Column3.length - 1] - 1:
        newCards.Column3.push(removeFromPile(clickedCard))
        setCards(newCards)
        break
      case cards.Column4[cards.Column4.length - 1] - 1:
        newCards.Column4.push(removeFromPile(clickedCard))
        setCards(newCards)
        break
      case cards.Column5[cards.Column5.length - 1] - 1:
        newCards.Column5.push(removeFromPile(clickedCard))
        setCards(newCards)
        break
      case cards.Column6[cards.Column6.length - 1] - 1:
        newCards.Column6.push(removeFromPile(clickedCard))
        setCards(newCards)
        break
      case cards.Column7[cards.Column7.length - 1] - 1:
        newCards.Column7.push(removeFromPile(clickedCard))
        setCards(newCards)
        break
      default:
        break
    }
  }

  const handleClick = (event) => {
    searchPlaceble(event.target.id)
  }

  const PlaceinColum = (event) => {
    // Check to see if dragged card is one less than where you are dragging it or if one higher if in win piles
    event.target
    if(event.target === targetColumn[targetColumn.length - 1] - 1){
      setCards(prevCards => ({
        ...prevCards,
        targetColumn: [...targetColumn, target] 
      }))
    }
  }

  return {
    deck,
    cards,
    gamePoints,
    handleClick,
    isGameRunning,
    RestartGame,
    StartGame}
}