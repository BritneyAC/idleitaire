import React, { useState, useEffect, MouseEventHandler, DetailedHTMLProps, ImgHTMLAttributes } from "react"
import { User } from "./useUserInfo"

interface previousMove {
  cardsMoved: number[],
  location: number
}

export class card {
  Playable: number[] = []
  Clubs: number[] = []
  Spades: number[] = []
  Hearts: number[] = []
  Diamonds: number[] = []
  ShownCards: number[] = []
  Columns: number[][] = [
    [],[],[],[],[],[],[]
  ] 
  previousMoves: previousMove[] = []
}

interface UseGameLogicProps {
  gamesWonIncreased: ()=>void,
  increasePoints: (points: number)=>void,
  saveUserInfo: ()=>void,
  userInfo: User,
}

const useGameLogic = (props: UseGameLogicProps) => {
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [deck, setDeck] = useState<number[]>([])
  const [gamePoints, setGamePoints] = useState(0)
  const [count, setCount] = useState(0)
  const [prevClicked, setPrevClicked] = useState<number[]>([])
  const [cards, setCards] = useState(new card())
  const [gameType, setGameType] = useState("normal")
  
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
  const NewDeck = (): number[] => {
    const newDeck: number[] = []
    for(let i = 1; i <= 52; i++){
      newDeck.push(i)
    }
    const shuffled: number[] = []
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
      Win()
    }
  }, [cards])
  
  const StartColumns = (type: string = "normal") => {
    const newDeck: number[] = NewDeck()
    const newCards: card = {
      ...new card()
    }
    for(let i = 0; i < 7; i++){
      newCards.Columns[6].push(Number(newDeck.pop()))
      i > 0 && newCards.Columns[5].push(Number(newDeck.pop()))
      i > 1 && newCards.Columns[4].push(Number(newDeck.pop()))
      i > 2 && newCards.Columns[3].push(Number(newDeck.pop()))
      i > 3 && newCards.Columns[2].push(Number(newDeck.pop()))
      i > 4 && newCards.Columns[1].push(Number(newDeck.pop()))
      i > 5 && newCards.Columns[0].push(Number(newDeck.pop()))
    }
    newCards.Columns.forEach(column => {
      newCards.ShownCards.push(column[column.length - 1])
    })
    if(type === "normal"){
      newCards.Playable.push(Number(newDeck.pop()))
      newCards.ShownCards.push(newCards.Playable[0])
    } else if(type === "3card"){
      newCards.Playable.push(Number(newDeck.pop()))
      newCards.Playable.push(Number(newDeck.pop()))
      newCards.Playable.push(Number(newDeck.pop()))
      newCards.ShownCards.push(newCards.Playable[0])
      newCards.ShownCards.push(newCards.Playable[0])
      newCards.ShownCards.push(newCards.Playable[0])
    }
    setDeck(newDeck)
    setCards(newCards)
  }

  const StartGame = (type: string = "normal") => {
    setGameType(type)
    NewDeck()
    setCards(new card())
    setIsGameRunning(true)
    setGamePoints(0)
    StartColumns(type)
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

  const Win = () => {
    setDeck([])
    setIsGameRunning(false)
    props.increasePoints(780)
    props.saveUserInfo()
    StartGame()
  }

  // Removes and returns the passed card from where it is currently stored 
  const removeFromPile = (cardToRemove: number) => {
    const newCards: card = {...cards}
    const removedCards: number[] = []
    if(cards.Playable[cards.Playable.length - 1] === cardToRemove){
      removedCards.push(Number(newCards.Playable.pop()))
      newCards.previousMoves.push({cardsMoved: [...removedCards], location: 7})
      setCards(newCards)
      return removedCards
    }else if(cards.Clubs[cards.Clubs.length - 1] === cardToRemove){
      removedCards.push(Number(newCards.Clubs.pop()))
      newCards.previousMoves.push({cardsMoved: [...removedCards], location: 8})
      setCards(newCards)
      return removedCards
    }else if(cards.Spades[cards.Spades.length - 1] === cardToRemove){
      removedCards.push(Number(newCards.Spades.pop()))
      newCards.previousMoves.push({cardsMoved: [...removedCards], location: 9})
      setCards(newCards)
      return removedCards
    } else if (cards.Hearts[cards.Hearts.length - 1] === cardToRemove){
      removedCards.push(Number(newCards.Hearts.pop()))
      newCards.previousMoves.push({cardsMoved: [...removedCards], location: 10})
      setCards(newCards)
      return removedCards
    } else if(cards.Diamonds[cards.Diamonds.length - 1] === cardToRemove){
      removedCards.push(Number(newCards.Diamonds.pop()))
      newCards.previousMoves.push({cardsMoved: [...removedCards], location: 11})
      setCards(newCards)
      return removedCards
    }
    cards.Columns.forEach((column, index) => {
      if(column.includes(cardToRemove)){
        const indexOfCard = cards.Columns[index].indexOf(cardToRemove)
        const spliceAmount = cards.Columns[index].length - cards.Columns[index].indexOf(cardToRemove)

        removedCards.push(
          ...newCards.Columns[index].splice(
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
  const searchPlaceable = (clickedCard: number) => {
    const newCards = {...cards}
    for(let i = 0; i < 7; i++){
      if(clickedCard === cards.Columns[i][cards.Columns[i].length - 1] || clickedCard === cards.Playable[cards.Playable.length - 1]){
        if( clickedCard === 1 || cards.Clubs[cards.Clubs.length - 1] + 1 === clickedCard ){
          let removed = [removeFromPile(clickedCard)].flat()
          newCards.Clubs.push(Number(removed[0]))
          setCards(newCards)
          return true
        } else if( clickedCard === 14 || cards.Spades[cards.Spades.length - 1] + 1 === clickedCard ){
          let removed = [removeFromPile(clickedCard)].flat()
          newCards.Spades.push(Number(removed[0]))
          setCards(newCards)
          return true
        } else if( clickedCard === 27 || cards.Hearts[cards.Hearts.length - 1] + 1 === clickedCard ){
          let removed = [removeFromPile(clickedCard)].flat()
          newCards.Hearts.push(Number(removed[0]))
          setCards(newCards)
          return true
        } else if( clickedCard === 40 || cards.Diamonds[cards.Diamonds.length - 1] + 1 === clickedCard ){
          let removed = [removeFromPile(clickedCard)].flat()
          newCards.Diamonds.push(Number(removed[0]))
          setCards(newCards)
          return true
    }}}
    if( clickedCard === 13 || clickedCard === 26 || clickedCard === 39 || clickedCard === 52 ){
      cards.Columns.forEach((column, index) => {
        if(cards.Columns[index].length === 0){
          let removed = [removeFromPile(clickedCard)].flat()
          for(let j = 0; j < removed.length; j++){
            newCards.Columns[index].push(
              Number(removed[j])
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
          let removed = [removeFromPile(clickedCard)].flat()
          for(let j = 0; j < removed.length; j++){
            newCards.Columns[i].push(
              Number(removed[j])
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
          let removed = [removeFromPile(clickedCard)].flat()
          for(let j = 0; j < removed.length; j++){
            newCards.Columns[i].push(
              Number(removed[j])
            )
          }
        setPrevClicked(prev => [...prev, clickedCard])
        setCards(newCards)
        return true
      }}}}

  const handleClick = (id: number) => {
    searchPlaceable(id)
  }

  const flipCard = () => {
    const newDeck = [...deck]
    const newCards = {...cards}
    newCards.Playable.push(Number(newDeck.pop()))
    newCards.ShownCards.push(newCards.Playable[newCards.Playable.length - 1])
    newCards.previousMoves.push({cardsMoved: [newCards.Playable[newCards.Playable.length - 1]], location: 12})
    setDeck(newDeck)
    setCards(newCards)
  }

  const flip3Cards = () => {
    const newDeck = [...deck]
    const newCards = {...cards}
    for(let i = 0; i < 3; i++){
      newCards.Playable.push(Number(newDeck.pop()))
      newCards.ShownCards.push(newCards.Playable[newCards.Playable.length - 1])
      newCards.previousMoves.push({cardsMoved: [newCards.Playable[newCards.Playable.length - 1]], location: 12})
    }
    setDeck(newDeck)
    setCards(newCards)
  }

  const flipSpider = () => {
    const newDeck = [...deck]
    const newCards = {...cards}
    for(let i = 0; i < 7; i++){
      newCards.Columns[i].push(Number(newDeck.pop()))
      newCards.ShownCards.push(newCards.Columns[i][newCards.Columns[i].length - 1])
      newCards.previousMoves.push({cardsMoved: [newCards.Columns[i][newCards.Columns[i].length - 1]], location: i})
    }
    setDeck(newDeck)
    setCards(newCards)
  }



  const resetDeck = () => {
    const newDeck = [...deck]
    const newCards = {...cards}
    while(newCards.Playable.length > 0){
      const remove: number = Number(newCards.Playable.shift())
      newCards.ShownCards.splice(
        newCards.ShownCards.indexOf(remove), 1)
      newDeck.push(remove)
    }
    setDeck(newDeck.reverse())
    setCards(newCards)
  }

  const undoMove = () => {
    const newCards = {...cards}
    const previousMove = newCards.previousMoves.pop()
    if(previousMove){
      const {cardsMoved, location} = previousMove
      if(location < 7){
      let removed = [removeFromPile(cardsMoved[0])].flat()
      if(newCards.ShownCards[newCards.ShownCards.length - 1] === newCards.Columns[location][newCards.Columns[location].length -1]){
        newCards.ShownCards.pop()
      }
      for(let i = 0; i < removed.length; i++){
        newCards.Columns[location].push(
          Number(removed[i])
          )
        }
      } else if(location === 7){
        let removed = [removeFromPile(cardsMoved[0])].flat()
        newCards.Playable.push(
          Number(removed[0])
        )
      } else if(location === 8){
        let removed = [removeFromPile(cardsMoved[0])].flat()
        newCards.Clubs.push(
          Number(removed[0])
        )
      } else if(location === 9){
        let removed = [removeFromPile(cardsMoved[0])].flat()
        newCards.Spades.push(
          Number(removed[0])
        )
      } else if(location === 10){
        let removed = [removeFromPile(cardsMoved[0])].flat()
        newCards.Hearts.push(
          Number(removed[0])
          )
      } else if(location === 11){
        let removed = [removeFromPile(cardsMoved[0])].flat()
        newCards.Diamonds.push(
          Number(removed[0])
          )
        } else if(location === 12){
          let removed = [removeFromPile(cardsMoved[0])].flat()
          newCards.ShownCards.pop()
        const newDeck = [...deck]
        newDeck.push(
          Number(removed[0])
        )
        setDeck(newDeck)
      }
      newCards.previousMoves.pop()
      setCards(newCards)
    }
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
      if(count % 12 === 1){
        setPrevClicked([])
      }
    } else if(count % 16 === 1){
      setPrevClicked([])
    }
    for(let i = 0; i < 7; i++){
      const shown = cards.Columns[i].filter((num) => cards.ShownCards.includes(num))
      for(let j = 0; j < shown.length; j++){
        if((shown[j] === 13 || shown[j] === 26 || shown[j] === 39 || shown[j] === 52) && shown[j] === cards.Columns[i][0]){
        } else if( !prevClicked.includes(shown[j]) && searchPlaceable(shown[j])){
          return true
        }
      }
    }
    if(searchPlaceable(cards.Playable[cards.Playable.length - 1])){
      return true
    } else if(deck.length > 0){
      flipCard()
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
    if(count > 155){
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
    flip3Cards,
    flipSpider,
    resetDeck,
    undoMove,
    isGameRunning,
    RestartGame,
    StartGame,
    EndGame,
    gameType,
    NewDeck,
    StartColumns,
    searchPlaceable,
    removeFromPile,
    playForYou}
}

export default useGameLogic