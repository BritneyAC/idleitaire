import { useState, useEffect } from "react"

export default function useGameLogic(props){
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [deck, setDeck] = useState([])
  const [gamePoints, setGamePoints] = useState(0)
  const [count, setCount] = useState(0)
  const [prevClicked, setPrevClicked] = useState([])
  
  //potentially refactor columns into an array of arrays to reduce code
  class card {
    Playable = []
    Clubs = []
    Spades = []
    Hearts = []
    Diamonds = []
    ShownCards = []
    Columns = [
      [],[],[],[],[],[],[]
    ] 
    previousMoves = []
  }

  const newCard = new card()
  const [cards, setCards] = useState(newCard)
  
  //points counter
  useEffect(() => {
    if(isGameRunning){
      const points = (
        cards.Clubs.length + 
        cards.Spades.length + 
        cards.Hearts.length + 
        cards.Diamonds.length) * 10 
      setGamePoints(points)
    }
  }, [cards])

  //Show new card if end of column has none showing
  useEffect(() => {
    for(let i = 0; i < 7; i++){
      const column = cards.Columns[i]
      if(!cards.ShownCards.includes(column[column.length - 1])){
        setCards(prevCards => ({
          ...prevCards,
          ShownCards: [...prevCards.ShownCards, column[column.length - 1]]
        }))
      }
    }
  }, [cards])

 

  //makes an array of 52 cards and shuffles the order
  const NewDeck = () => {
    const newDeck = []
    for(let i = 1; i <= 52; i++){
      newDeck.push(i)
    }
    const shuffled = []
    for(let i = 0; i < newDeck.length; i){
      let randnum = Math.floor(
            Math.random() * newDeck.length
          )
      shuffled.push(
        newDeck.splice(
          randnum, 1
          )[0])
    }
    return shuffled
  }

  // const ShuffleDeck = () => {
  //   const newDeck = []
  //   const heldDeck = [...deck]
    
  //   setDeck(newDeck)
  // }

  // win condition checker
  useEffect(() =>{
    if(cards.ShownCards.length === 53){
      props.gamesWonIncreased()
      setGamePoints(780)
      RestartGame()
    }
  }, [cards])
  
  const StartColumns = (newDeck) => {
    const newCards = {
      ...new card()
    }
    for(let i = 0; i < 7; i++){
      newCards.Columns[6].push(newDeck.pop())
      i > 0 && newCards.Columns[5].push(newDeck.pop())
      i > 1 && newCards.Columns[4].push(newDeck.pop())
      i > 2 && newCards.Columns[3].push(newDeck.pop())
      i > 3 && newCards.Columns[2].push(newDeck.pop())
      i > 4 && newCards.Columns[1].push(newDeck.pop())
      i > 5 && newCards.Columns[0].push(newDeck.pop())
    }
    newCards.Columns.forEach(column => {
      newCards.ShownCards.push(column[column.length - 1])
    })
    newCards.Playable.push(newDeck.pop())
    newCards.ShownCards.push(newCards.Playable[0])
    setDeck(newDeck)
    setCards(newCards)
  }

  const StartGame = () => {
    NewDeck()
    setCards({})
    setIsGameRunning(true)
    setGamePoints(0)
    StartColumns(NewDeck())
    setPrevClicked([])
    setCount(0)
  }


  const RestartGame = () => {
    EndGame()
    StartGame()
  }

  const EndGame = () => {
    setDeck([])
    setIsGameRunning(false)
    props.increasePoints(gamePoints)
  }

  // Removes and returns the passed card from where it is currently stored 
  const removeFromPile = (cardToRemove) => {
    const newCards = {...cards}
    const removedCards = []
    if(cards.Playable[cards.Playable.length - 1] === cardToRemove){
      removedCards.push(newCards.Playable.pop())
      newCards.previousMoves.push({cardsMoved: [...removedCards], location: 7})
      setCards(newCards)
      return removedCards
    }else if(cards.Clubs[cards.Clubs.length - 1] === cardToRemove){
      removedCards.push(newCards.Clubs.pop())
      newCards.previousMoves.push({cardsMoved: [...removedCards], location: 8})
      setCards(newCards)
      return removedCards
    }else if(cards.Spades[cards.Spades.length - 1] === cardToRemove){
      removedCards.push(newCards.Spades.pop())
      newCards.previousMoves.push({cardsMoved: [...removedCards], location: 9})
      setCards(newCards)
      return removedCards
    } else if (cards.Hearts[cards.Hearts.length - 1] === cardToRemove){
      removedCards.push(newCards.Hearts.pop())
      newCards.previousMoves.push({cardsMoved: [...removedCards], location: 10})
      setCards(newCards)
      return removedCards
    } else if(cards.Diamonds[cards.Diamonds.length - 1] === cardToRemove){
      removedCards.push(newCards.Diamonds.pop())
      newCards.previousMoves.push({cardsMoved: [...removedCards], location: 11})
      setCards(newCards)
      return removedCards
    }
    cards.Columns.forEach((column, index) => {
      if(column.includes(cardToRemove)){
        const indexOfCard = cards.Columns[index].indexOf(cardToRemove)
        const spliceAmount = cards.Columns[index].length - cards.Columns[index].indexOf(cardToRemove)

        removedCards.push(
          newCards.Columns[index].splice(
            indexOfCard, 
            spliceAmount
        ))
        newCards.previousMoves.push({cardsMoved: [...removedCards.flat()], location: index})
      }
    })
    if(removedCards.length !== 0){
      setCards(newCards)
      return removedCards
    }
  }

  // checks where the the card can be placed
  const searchPlaceable = (clickedCard) => {
    const newCards = {...cards}
    for(let i = 0; i < 7; i++){
      if(clickedCard === cards.Columns[i][cards.Columns[i].length - 1] || clickedCard === cards.Playable[cards.Playable.length - 1]){
        if( clickedCard === 1 || cards.Clubs[cards.Clubs.length - 1] + 1 === clickedCard ){
          let removed = removeFromPile(clickedCard).flat()
          newCards.Clubs.push(removed[0])
          setCards(newCards)
          return true
        } else if( clickedCard === 14 || cards.Spades[cards.Spades.length - 1] + 1 === clickedCard ){
          let removed = removeFromPile(clickedCard).flat()
          newCards.Spades.push(removed[0])
          setCards(newCards)
          return true
        } else if( clickedCard === 27 || cards.Hearts[cards.Hearts.length - 1] + 1 === clickedCard ){
          let removed = removeFromPile(clickedCard).flat()
          newCards.Hearts.push(removed[0])
          setCards(newCards)
          return true
        } else if( clickedCard === 40 || cards.Diamonds[cards.Diamonds.length - 1] + 1 === clickedCard ){
          let removed = removeFromPile(clickedCard).flat()
          newCards.Diamonds.push(removed[0])
          setCards(newCards)
          return true
    }}}
    if( clickedCard === 13 || clickedCard === 26 || clickedCard === 39 || clickedCard === 52 ){
      cards.Columns.forEach((column, index) => {
        if(cards.Columns[index].length === 0){
          let removed = removeFromPile(clickedCard).flat()
          for(let j = 0; j < removed.length; j++){
            newCards.Columns[index].push(
              removed[j]
            )
          }
          setCards(newCards)
          return true
    }})}else if( clickedCard < 27 ){
      let testNum = clickedCard
      if(clickedCard > 13){
        testNum = clickedCard - 13
      }
      for(let i = 0; i < 7; i++){
        let destination = cards.Columns[i][cards.Columns[i].length - 1]
        if(destination > 39){
          destination = destination - 39
        } else if(40 > destination && destination > 26){
          destination = destination - 26
        } else if(27 > destination && destination > 13){
          destination = destination - 13
        }
        if(
          destination - 1 === testNum
          && cards.Columns[i][cards.Columns[i].length -1] > 26
        ){
          let removed = removeFromPile(clickedCard).flat()
          for(let j = 0; j < removed.length; j++){
            newCards.Columns[i].push(
              removed[j]
              )
            }
        setPrevClicked(prev => [...prev, clickedCard])
        setCards(newCards)
        return true
    }}}else if( clickedCard > 26 ){ 
      let testNum = clickedCard
      if(clickedCard > 39){
        testNum = clickedCard - 39
      } else{
        testNum = clickedCard - 26
      }
      for(let i = 0; i < 7; i++){
        let destination = cards.Columns[i][cards.Columns[i].length - 1]
        if(destination > 39){
          destination = destination - 39
        } else if(40 > destination && destination > 26){
          destination = destination - 26
        } else if(27 > destination && destination > 13){
          destination = destination - 13
        }
        if(
          destination - 1 === testNum
          && cards.Columns[i][cards.Columns[i].length -1] < 27
        ){
          let removed = removeFromPile(clickedCard).flat()
          for(let j = 0; j < removed.length; j++){
            newCards.Columns[i].push(
              removed[j]
            )
          }
        setPrevClicked(prev => [...prev, clickedCard])
        setCards(newCards)
        return true
      }}}}

  const handleClick = (event) => {
    searchPlaceable(Number(event.target.id))
  }

  const flipCard = () => {
    const newDeck = [...deck]
    const newCards = {...cards}
    newCards.Playable.push(newDeck.pop())
    newCards.ShownCards.push(newCards.Playable[newCards.Playable.length - 1])
    newCards.previousMoves.push({cardsMoved: [newCards.Playable[newCards.Playable.length - 1]], location: 12})
    setDeck(newDeck)
    setCards(newCards)
  }

  const resetDeck = () => {
    const newDeck = [...deck]
    const newCards = {...cards}
    while(newCards.Playable.length > 0){
      const remove = newCards.Playable.shift()
      newCards.ShownCards.splice(
        newCards.ShownCards.indexOf(remove), 1)
      newDeck.push(remove)
    }
    setDeck(newDeck.reverse())
    setCards(newCards)
  }

  const undoMove = () => {
    const newCards = {...cards}
    const {cardsMoved, location} = newCards.previousMoves.pop()
    if(location < 7){
      let removed = removeFromPile(cardsMoved[0]).flat()
      if(newCards.ShownCards[newCards.ShownCards.length - 1] === newCards.Columns[location][newCards.Columns[location].length -1]){
        newCards.ShownCards.pop()
      }
      for(let i = 0; i < removed.length; i++){
        newCards.Columns[location].push(removed[i])
      }
    } else if(location === 7){
      let removed = removeFromPile(cardsMoved[0]).flat()
      newCards.Playable.push(removed[0])
    } else if(location === 8){
      let removed = removeFromPile(cardsMoved[0]).flat()
      newCards.Clubs.push(removed[0])
    } else if(location === 9){
      let removed = removeFromPile(cardsMoved[0]).flat()
      newCards.Spades.push(removed[0])
    } else if(location === 10){
      let removed = removeFromPile(cardsMoved[0]).flat()
      newCards.Hearts.push(removed[0])
    } else if(location === 11){
      let removed = removeFromPile(cardsMoved[0]).flat()
      newCards.Diamonds.push(removed[0])
    } else if(location === 12){
      let removed = removeFromPile(cardsMoved[0]).flat()
      newCards.ShownCards.pop()
      const newDeck = [...deck]
      newDeck.push(removed[0])
      setDeck(newDeck)
    }
    newCards.previousMoves.pop()
    setCards(newCards)
  }

  // const PlaceinColum = (event) => {
  //   // Check to see if dragged card is one less than where you are dragging it or if one higher if in win piles
  //   event.target
  //   if(event.target === targetColumn[targetColumn.length - 1] - 1){
  //     setCards(prevCards => ({
    //       ...prevCards,
  //       targetColumn: [...targetColumn, target] 
  //     }))
  //   }
  // }

  const playForYou = () => {
    setCount(prevCount => prevCount + 1)
    
    if(deck.length === 0){
      if(count % 8 === 1){
        setPrevClicked([])
      }
    } else if(count % 12 === 1){
      setPrevClicked([])
    }
    for(let i = 0; i < 7; i++){
      const shown = cards.Columns[i].filter((num) => cards.ShownCards.includes(num))
      for(let j = 0; j < shown.length; j++){
        if((shown[j] === 13 || shown[j] === 26 || shown[j] === 39 || shown[j] === 52) && shown[j] === cards.Columns[i][0]){
          return
        } else if( !prevClicked.includes(shown[j]) && searchPlaceable(shown[j])){
          return true
        }
      }
    }
    if(searchPlaceable(cards.Playable[cards.Playable.length - 1])){
      return true
    } else if(deck.length > 0){
      flipCard()
      if(count % 3 === 1){
        setPrevClicked([])
      }
    } else{
      resetDeck()
    }
  }

  
  // playForYou Upgrade
  useEffect(() => {
    let playForYouTimer
    if(isGameRunning){
      if(props.userInfo.playForYou > 0){
        if(props.userInfo.playForYouToggle){

          const time = 5000 / props.userInfo.playForYou
          const playForYouTimer = setInterval(() => {
            
            
            playForYou()}, time)
            return () => clearInterval(playForYouTimer)
          } else{
            clearInterval(playForYouTimer)
          }
        } else{
          clearInterval(playForYouTimer)
        }
      }else{
        clearInterval(playForYouTimer)
      }
    
  }, [isGameRunning, props.userInfo.playForYou, props.userInfo.playForYouToggle, deck, cards, count])

  useEffect(()=>{
    if(count > 200){
      RestartGame()
    }
  },[isGameRunning, count])

  return {
    ...props,
    deck,
    cards,
    gamePoints,
    setGamePoints,
    count,
    setCount,
    prevClicked,
    setPrevClicked,
    handleClick,
    flipCard,
    resetDeck,
    undoMove,
    isGameRunning,
    RestartGame,
    StartGame,
    EndGame,
    NewDeck,
    StartColumns,
    searchPlaceable,
    removeFromPile,
    playForYou}
}