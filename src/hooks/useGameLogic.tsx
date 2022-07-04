import React, { useState, useEffect, MouseEventHandler, DetailedHTMLProps, ImgHTMLAttributes } from "react"
import { User } from "@/hooks/useUserInfo"

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
  currentGame: string,
  roboGame: boolean,
  playForYou: number,
  roboPlayer: number,
  playForYouToggle: boolean,
}

const useGameLogic = (props: UseGameLogicProps) => {
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [deck, setDeck] = useState<number[]>([])
  const [gamePoints, setGamePoints] = useState(0)
  const [count, setCount] = useState(0)
  const [prevClicked, setPrevClicked] = useState<number[]>([])
  const [cards, setCards] = useState(new card())
  const [gameType, setGameType] = useState(props.currentGame)
  const [deckFlipped, setDeckFlipped] = useState(false)
  const [prevClickedCount, setPrevClickedCount] = useState(0)
  
  //points counter
  useEffect(() => {
    if(isGameRunning){
      let amount = 10
      if(props.currentGame !== "normal"){
        amount = 15
      }
      const points = (
        cards.Clubs.length + 
        cards.Spades.length + 
        cards.Hearts.length + 
        cards.Diamonds.length) * amount
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

  useEffect(() => {
    if(!isGameRunning){
      StartGame(props.currentGame) 
    }
  }, [])

  // win condition checker
  useEffect(() =>{
    let win = true
    for(let i = 0; i < 7; i++){
      if(!cards.ShownCards.includes(cards.Columns[i][0])){
        win = false
        return
      }
    }
    if(win){
      props.gamesWonIncreased()
      Win(gameType)
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
    if(type === "normal" || type === "robo"){
      newCards.Playable.push(Number(newDeck.pop()))
      newCards.ShownCards.push(newCards.Playable[0])
    } else if(type === "3card"){
      newCards.Playable.push(Number(newDeck.pop()))
      newCards.Playable.push(Number(newDeck.pop()))
      newCards.Playable.push(Number(newDeck.pop()))
      newCards.ShownCards.push(newCards.Playable[0])
      newCards.ShownCards.push(newCards.Playable[1])
      newCards.ShownCards.push(newCards.Playable[2])
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

  const RestartGame = (type: string = "normal") => {
    EndGame()
    StartGame(gameType)
  }

  const EndGame = () => {
    setDeck([])
    setIsGameRunning(false)
    props.increasePoints(gamePoints)
  }

  const Win = (type: string = "normal") => {
    setDeck([])
    setIsGameRunning(false)
    if(type === "normal" || type === "robo"){
      props.increasePoints(780)
    } else if(type === "3card"){
      props.increasePoints(1100)
    }
    props.userInfo.autoSave && props.saveUserInfo()
    StartGame(type)
  }

  // Removes and returns the passed card from where it is currently stored 
  const removeFromPile: (card: number)=>number[] = (cardToRemove: number) => {
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
    newCards.Columns.forEach((column, index) => {
      if(column.includes(cardToRemove)){
        const indexOfCard = cards.Columns[index].indexOf(cardToRemove)
        const spliceAmount = cards.Columns[index].length - cards.Columns[index].indexOf(cardToRemove)

        removedCards.push(
          ...newCards.Columns[index].splice(
            indexOfCard, 
            spliceAmount
        ))
        newCards.previousMoves.push({cardsMoved: [...removedCards.flat()], location: index})
        if(!newCards.ShownCards.includes(column[column.length - 1])){
          newCards.ShownCards.push(column[column.length - 1])
        }
      }
    })
    setCards(newCards)
    return removedCards
    
  }

  const searchInColumns = (card: number) => {
      for(let i = 0; i < cards.Columns.length; i++){
        const newCards: card = {...cards}
        if( card < 27 ){
          let testNum = card
          if(card > 13){
            testNum = card - 13
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
              let removed = [removeFromPile(card)].flat()
              for(let j = 0; j < removed.length; j++){
                newCards.Columns[i].push(
                  Number(removed[j])
                  )
                }
            setPrevClicked(prev => [...prev, card])
            setCards(newCards)
            return true
        }}}else if( card > 26 ){ 
          let testNum = card
          if(card > 39){
            testNum = card - 39
          } else{
            testNum = card - 26
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
              let removed = [removeFromPile(card)].flat()
              for(let j = 0; j < removed.length; j++){
                newCards.Columns[i].push(
                  Number(removed[j])
                )
              }
            setPrevClicked(prev => [...prev, card])
            setCards(newCards)
            return true
          }}}
        }
      return false
    }


  const searchForNewShown = () => {
    for(let j = 0; j < cards.Columns.length; j++){
      for(let k = cards.Columns[j].length - 1; k >= 0; k--){
        if(cards.Columns[j].length > 1 && !cards.ShownCards.includes(cards.Columns[j][k - 1])){
          const card = cards.Columns[j][k]
          if(!prevClicked.includes(card) && cards.ShownCards.includes(card)){
            for(let i = 0; i < cards.Columns.length; i++){
              if(searchPlaceable(card)){
                return true
              }
            }
          }
        }
      }
    }
    return false
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
          prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
          return true
        } else if( clickedCard === 14 || cards.Spades[cards.Spades.length - 1] + 1 === clickedCard ){
          let removed = [removeFromPile(clickedCard)].flat()
          newCards.Spades.push(Number(removed[0]))
          setCards(newCards)
          prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
          return true
        } else if( clickedCard === 27 || cards.Hearts[cards.Hearts.length - 1] + 1 === clickedCard ){
          let removed = [removeFromPile(clickedCard)].flat()
          newCards.Hearts.push(Number(removed[0]))
          setCards(newCards)
          prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
          return true
        } else if( clickedCard === 40 || cards.Diamonds[cards.Diamonds.length - 1] + 1 === clickedCard ){
          let removed = [removeFromPile(clickedCard)].flat()
          newCards.Diamonds.push(Number(removed[0]))
          setCards(newCards)
          prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
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
    }})}return searchInColumns(clickedCard)
  }

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
    const moved = []
    for(let i = 0; i < Math.min(3, newDeck.length + i); i++){
      moved.push(Number(newDeck.pop()))
      newCards.Playable.push(moved[i])
      newCards.ShownCards.push(moved[i])
    }
    newCards.previousMoves.push({cardsMoved: moved, location: 12})
    setDeck(newDeck)
    setCards(newCards)
  }

  const flipSpider = () => {
    const newDeck = [...deck]
    const newCards = {...cards}
    for(let i = 0; i < 7; i++){
      newCards.Columns[i].push(Number(newDeck.pop()))
      newCards.ShownCards.push(newCards.Columns[i][newCards.Columns[i].length - 1])
    }
    newCards.previousMoves.push({cardsMoved: [
      newCards.Columns[0][newCards.Columns[0].length - 1],
      newCards.Columns[1][newCards.Columns[1].length - 1],
      newCards.Columns[2][newCards.Columns[2].length - 1],
      newCards.Columns[3][newCards.Columns[3].length - 1],
      newCards.Columns[4][newCards.Columns[4].length - 1],
      newCards.Columns[5][newCards.Columns[5].length - 1],
      newCards.Columns[6][newCards.Columns[6].length - 1],
    ], location: 12})
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
    newCards.previousMoves.push({cardsMoved: [], location: 13})
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
          let removed: number[] = []
          if(gameType === "normal"){
            const CM = cardsMoved.pop()
            if(typeof CM === "number"){
              removed.push(removeFromPile(CM)[0])
              newCards.ShownCards.pop()
            }

          }else if(gameType === "3card"){
            while(cardsMoved.length > 0){
              removed.push(removeFromPile(Number(cardsMoved.pop()))[0])
              newCards.ShownCards.pop()
              if(cardsMoved.length > 0){
                newCards.previousMoves.pop()
              }
            }
          }else if(gameType === "spider"){
            for(let i = 0; i < 7; i++){
              removed.push(removeFromPile(cardsMoved[0])[i])
              newCards.ShownCards.pop()
            }
            if(cardsMoved.length > 1){
              newCards.previousMoves.pop()
            }
          }
        const newDeck = [...deck]
        while(removed.length > 0){
          newDeck.push(
            Number(removed.shift())
          )

        }
        setDeck(newDeck)
      } else if(location === 13){
        const newDeck = [...deck]
        while(newDeck.length > 0){
          newCards.Playable.push(Number(newDeck.pop()))
          newCards.ShownCards.push(newCards.Playable[newCards.Playable.length - 1])
        }
        setDeck(newDeck)
      }
      if(location !== 13){
        newCards.previousMoves.pop()
      }
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

    if(searchForNewShown()){
      prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
      setDeckFlipped(false)
      return true
    }
    for(let i = 0; i < 7; i++){
      const shown = cards.Columns[i].filter((num) => cards.ShownCards.includes(num))
      for(let j = 0; j < shown.length; j++){
        if((shown[j] === 13 || shown[j] === 26 || shown[j] === 39 || shown[j] === 52) && shown[j] === cards.Columns[i][0]){
        } else if( !prevClicked.includes(shown[j]) && searchPlaceable(shown[j])){
          setDeckFlipped(false)
          return true
        }
      }
    }
    if(searchPlaceable(cards.Playable[cards.Playable.length - 1])){
      prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
      setDeckFlipped(false)
      return true
    } else if(deck.length > 0){
      if(gameType === "normal"){
        flipCard()
        return true
      }else if(gameType === "3card"){
        flip3Cards()
        return true
      }else if(gameType === "spider"){
        flipSpider()
        return true
      }
    } else if(gameType !== "spider"){
      if(cards.Playable.length > 0 && !deckFlipped){
        resetDeck()
        setDeckFlipped(true)
      } else if(prevClicked.length > 0 && prevClickedCount < 2){
        setPrevClicked([])
        setPrevClickedCount(prevCount => prevCount + 1)
      } else{
        RestartGame()
      }
    }
  }

  
  // playForYou Upgrade
  useEffect(() => {
    if(isGameRunning){
      if(!props.roboGame){
        if(props.playForYou > 0){
          if(props.playForYouToggle){
            const time = 5000 / props.playForYou

            const playForYouTimer = setInterval(() => {
              playForYou()}, time)

            return () => clearInterval(playForYouTimer)
          }
        }
      }else {
        if(props.roboPlayer > 0){
          const time = 2500 / props.roboPlayer
          const roboPlayerTimer = setInterval(() => {
            playForYou()}, time)

            return () => clearInterval(roboPlayerTimer)
        }   
      }
    }
    
  }, [isGameRunning, props.playForYou, props.playForYouToggle, props.roboPlayer, deck, cards, count])

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