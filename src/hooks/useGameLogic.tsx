import { useState, useEffect} from "react"
import { User } from "@/hooks/useUserInfo"

interface previousMove {
  cardsMoved: card[],
  location: string
}

export class card {
  constructor(value: number, shown: boolean, location: string){
    this.value = value;
    this.shown = shown;
    this.location = location;
  }
  value: number;
  shown: boolean = false;
  location: string;
}

export class cards {
  Playable: card[] = [];
  Clubs: card[] = [];
  Spades: card[] = [];
  Hearts: card[] = [];
  Diamonds: card[] = [];
  Columns: card[][] = [
    [],[],[],[],[],[],[]
  ] ;
  AllCards: card[] = [];
  ShownCards: card[] = [];
  previousMoves: previousMove[] = [];
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
  const [deck, setDeck] = useState<card[]>([])
  const [gamePoints, setGamePoints] = useState(0)
  const [count, setCount] = useState(0)
  const [prevClicked, setPrevClicked] = useState<card[]>([])
  const [gameCards, setGameCards] = useState(new cards())
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
        gameCards.Clubs.length + 
        gameCards.Spades.length + 
        gameCards.Hearts.length + 
        gameCards.Diamonds.length) * amount
      setGamePoints(points)
    }
    
  }, [gameCards])
  
  useEffect(() => {
    const ShownCards = gameCards.AllCards.filter(card => card.shown).filter(card => gameCards.ShownCards.includes(card) === false)
    if(ShownCards.length > 0){
      setGameCards(prevCards => ({...prevCards, ShownCards: [...prevCards.ShownCards, ...ShownCards]}))
    }
  }
  , [gameCards, deck])

  useEffect(() => {
    if(!isGameRunning){
      StartGame(props.currentGame) 
    }
  }, [])

  // win condition checker
  useEffect(() =>{
    if(isGameRunning){

      let win = true
      for(let i = 0; i < 7; i++){
        if(gameCards.Columns[i].length > 0){
          if(!gameCards.Columns[i][0].shown){
          win = false
          return
        }
      }
    }
    if(win){
      props.gamesWonIncreased()
      Win(gameType)
    }
    
  }
  }, [gameCards])

  //makes an array of 52 cards and shuffles the order
  const NewDeck = (): card[] => {
    const newDeck: card[] = []
    for(let i = 1; i <= 52; i++){
      newDeck.push({...new card(i, false, "deck")})
    }
    const shuffled: card[] = []
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
    const newDeck: card[] = NewDeck()
    const newGameCards: cards = {...new cards()}
    newGameCards.AllCards.push(...newDeck)
    
    for(let i = 0; i < 7; i++){
      const newCard = newDeck.pop()
      if(!!newCard){
        newCard.location = `column6`
        newGameCards.Columns[6].push(newCard)
      }
        if(i > 0){
        const newCard = newDeck.pop()
        if(!!newCard){
          newCard.location = `column5`
          newGameCards.Columns[5].push(newCard)
        }
      }
      if(i > 1){
        const newCard = newDeck.pop()
        if(!!newCard){
          newCard.location = `column4`
          newGameCards.Columns[4].push(newCard)
        }
      }
      if(i > 2){
        const newCard = newDeck.pop()
        if(!!newCard){
          newCard.location = `column3`
          newGameCards.Columns[3].push(newCard)
        }
      }
      if(i > 3){
        const newCard = newDeck.pop()
        if(!!newCard){
          newCard.location = `column2`
          newGameCards.Columns[2].push(newCard)
        }
      }
      if(i > 4){
        const newCard = newDeck.pop()
        if(!!newCard){
          newCard.location = `column1`
          newGameCards.Columns[1].push(newCard)
        }
      }
      if(i > 5){
        const newCard = newDeck.pop()
        if(!!newCard){
          newCard.location = `column0`
          newGameCards.Columns[0].push(newCard)
        }
      }
    }
    newGameCards.Columns.forEach((column, index) => {
      column[column.length - 1].shown = true
    })
    if(type === "normal" || type === "robo"){
      const newCard = newDeck.pop()
      if(!!newCard){
        newCard.shown = true
        newCard.location = "playable"
        newGameCards.Playable.push(newCard)
      }
    } else if(type === "3card"){
      const newCard = newDeck.pop()
      const newCardTwo = newDeck.pop()
      const newCardThree = newDeck.pop()
      if(!!newCard && !!newCardTwo && !!newCardThree){
        newCard.shown = true
        newCard.location = "playable"
        newGameCards.Playable.push(newCard)
        newCardTwo.shown = true
        newCardTwo.location = "playable"
        newGameCards.Playable.push(newCardTwo)
        newCardThree.shown = true
        newCardThree.location = "playable"
        newGameCards.Playable.push(newCardThree)
      }
    }
    setDeck(newDeck)
    setGameCards(newGameCards)
  }

  const StartGame = (type: string = "normal") => {
    setGameType(type)
    setDeck(NewDeck())
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
  const removeFromPile: (card: card)=>card[] = (cardToRemove: card) => {
    const newGameCards: cards = {...gameCards}
    const removedCards: card[] = []
    if(gameCards.Playable[gameCards.Playable.length - 1] === cardToRemove){
      let removedCard = newGameCards.Playable.pop()
      if(!!removedCard){
        removedCards.push(removedCard)
        newGameCards.previousMoves.push({cardsMoved: [...removedCards], location: "playable"})
        setGameCards(newGameCards)
        return removedCards
      }
    }else if(gameCards.Clubs[gameCards.Clubs.length - 1] === cardToRemove){
      let removedCard = newGameCards.Clubs.pop()
      if(!!removedCard){
        removedCards.push(removedCard)
        newGameCards.previousMoves.push({cardsMoved: [...removedCards], location: "clubs"})
        setGameCards(newGameCards)
        return removedCards
      }
    }else if(gameCards.Spades[gameCards.Spades.length - 1] === cardToRemove){
      let removedCard = newGameCards.Spades.pop()
      if(!!removedCard){
        removedCards.push(removedCard)
        newGameCards.previousMoves.push({cardsMoved: [...removedCards], location: "spades"})
        setGameCards(newGameCards)
        return removedCards
      }
    } else if (gameCards.Hearts[gameCards.Hearts.length - 1] === cardToRemove){
      let removedCard = newGameCards.Hearts.pop()
      if(!!removedCard){
        removedCards.push(removedCard)
        newGameCards.previousMoves.push({cardsMoved: [...removedCards], location: "hearts"})
        setGameCards(newGameCards)
        return removedCards
      }
    } else if(gameCards.Diamonds[gameCards.Diamonds.length - 1] === cardToRemove){
      let removedCard = newGameCards.Diamonds.pop()
      if(!!removedCard){
        removedCards.push(removedCard)
        newGameCards.previousMoves.push({cardsMoved: [...removedCards], location: "diamonds"})
        setGameCards(newGameCards)
        return removedCards
      } 
    }
    if(cardToRemove.location.slice(0,6) === "column"){
      let columnNum = Number(cardToRemove.location.slice(6, 7))
      const indexOfCard = gameCards.Columns[columnNum].indexOf(cardToRemove)
      const spliceAmount = gameCards.Columns[columnNum].length - gameCards.Columns[columnNum].indexOf(cardToRemove)

      removedCards.push(
        ...newGameCards.Columns[columnNum].splice(
          indexOfCard, 
          spliceAmount
      ))
      newGameCards.previousMoves.push({cardsMoved: [...removedCards.flat()], location: `column${columnNum}`})
      if(newGameCards.Columns[columnNum].length > 0){
        newGameCards.Columns[columnNum][newGameCards.Columns[columnNum].length - 1].shown = true
      }
    }
    setGameCards(newGameCards)
    return removedCards
    
  }

  const searchInColumns = (card: card) => {
    if(card){
      for(let i = 0; i < 7; i++){
        const newGameCards: cards = {...gameCards}
        if( card.value < 27 ){
          let testNum = card.value
          if(card.value > 13){
            testNum = card.value - 13
          }
          for(let i = 0; i < 7; i++){
            if(newGameCards.Columns[i].length > 0){
              let destination = gameCards.Columns[i][gameCards.Columns[i].length - 1].value
              if(destination > 39){
                destination = destination - 39
              } else if(40 > destination && destination > 26){
                destination = destination - 26
              }
              if(
                destination - 1 === testNum
                && gameCards.Columns[i][gameCards.Columns[i].length -1].value > 26
              ){
                let removed = removeFromPile(card)
                for(let j = 0; j < removed.length; j++){
                  const rmvd = removed[j]
                  if(!!rmvd){
                    rmvd.shown = true
                    rmvd.location = `column${i}`
                    newGameCards.Columns[i].push(rmvd)
                  }
                }
              setPrevClicked(prev => [...prev, card])
              setGameCards(newGameCards)
              return true
        }}}}else if( card.value > 26 ){ 
          let testNum = card.value
          if(card.value > 39){
            testNum = card.value - 39
          } else{
            testNum = card.value - 26
          }
          for(let i = 0; i < 7; i++){
            if(gameCards.Columns[i].length > 0){
              let destination = gameCards.Columns[i][gameCards.Columns[i].length - 1].value
              if(27 > destination && destination > 13){
                destination = destination - 13
              }
              if(
                destination - 1 === testNum
                && gameCards.Columns[i][gameCards.Columns[i].length -1].value < 27
                ){
                  let removed = removeFromPile(card).flat()
                  for(let j = 0; j < removed.length; j++){
                    const rmvd = removed[j]
                    if(!!rmvd){
                      rmvd.shown = true
                      rmvd.location = `column${i}`
                      newGameCards.Columns[i].push(rmvd)
                    }
                  }
                  setPrevClicked(prev => [...prev, card])
                  setGameCards(newGameCards)
                  return true
                }
          }}}
        }
    }
    return false
  }


  const searchForNewShown = () => {
    for(let j = 0; j < gameCards.Columns.length; j++){
      for(let k = gameCards.Columns[j].length - 1; k >= 0; k--){
        
        if(gameCards.Columns[j].length > 1 && !gameCards.Columns[j][k - 1]?.shown){
          const card = gameCards.Columns[j][k]
          if(!prevClicked.includes(card) && card.shown){
            for(let i = 0; i < gameCards.Columns.length; i++){
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
  const searchPlaceable = (clickedCard: card) => {
    const newGameCards: cards = {...gameCards}
    if(clickedCard){
      for(let i = 0; i < 7; i++){
        if(newGameCards.Columns[i].length > 0){
          if(clickedCard === gameCards.Columns[i][gameCards.Columns[i].length - 1] || clickedCard === gameCards.Playable[gameCards.Playable.length - 1]){
            if( clickedCard.value === 1 || (gameCards.Clubs.length > 0 && gameCards.Clubs[gameCards.Clubs.length - 1].value + 1 === clickedCard.value) ){
              let removed = [removeFromPile(clickedCard)].flat()[0]
              removed.location = `clubs`
              newGameCards.Clubs.push(removed)
              setGameCards(newGameCards)
              prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
              return true
            } else if( clickedCard.value === 14 || (gameCards.Spades.length > 0 && gameCards.Spades[gameCards.Spades.length - 1].value + 1 === clickedCard.value) ){
              let removed = [removeFromPile(clickedCard)].flat()[0]
              removed.location = `spades`
              newGameCards.Spades.push(removed)
              setGameCards(newGameCards)
              prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
              return true
            } else if( clickedCard.value === 27 || (gameCards.Hearts.length > 0 && gameCards.Hearts[gameCards.Hearts.length - 1].value + 1 === clickedCard.value) ){
              let removed = [removeFromPile(clickedCard)].flat()[0]
              removed.location = `hearts`
              newGameCards.Hearts.push(removed)
              setGameCards(newGameCards)
              prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
              return true
            } else if( clickedCard.value === 40 || (gameCards.Diamonds.length > 0 && gameCards.Diamonds[gameCards.Diamonds.length - 1].value + 1 === clickedCard.value) ){
              let removed = [removeFromPile(clickedCard)].flat()[0]
              removed.location = `diamonds`
              newGameCards.Diamonds.push(removed)
              setGameCards(newGameCards)
              prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
              return true
            }
      }}}
      if( (clickedCard.value === 13 || clickedCard.value === 26 || clickedCard.value === 39 || clickedCard.value === 52 )
        && (clickedCard.location.slice(0,6) !== "column" || gameCards.Columns[Number(clickedCard.location.slice(6))].indexOf(clickedCard) !== 0)
      ){
        gameCards.Columns.forEach((column, index) => {
          if(column.length === 0){
            let removed = removeFromPile(clickedCard).flat()
            for(let j = 0; j < removed.length; j++){
              removed[j].shown = true
              removed[j].location = `column${index}`
              newGameCards.Columns[index].push(removed[j])
            }
            setGameCards(newGameCards)
            return true
      }})
    }
    }
    return searchInColumns(clickedCard)
  }

  const handleClick = (id: number) => {
    const clickedCard: card = gameCards.AllCards.filter(card => card.value === id)[0]
    if(!!clickedCard){
      searchPlaceable(clickedCard)
    }
  }



  const flipCard = () => {
    const newDeck = [...deck]
    const newGameCards = {...gameCards}
    const newCard = newDeck.pop()
    if(typeof newCard !== "undefined"){
      newCard.shown = true
      newCard.location = "playable"
      newGameCards.Playable.push(newCard)
      newGameCards.previousMoves.push({cardsMoved: [newCard], location: "deck"})
    } 
    setDeck(newDeck)
    setGameCards(newGameCards)
  }

  const flip3Cards = () => {
    const newDeck = [...deck]
    const newGameCards = {...gameCards}
    const moved = []
    for(let i = 0; i < Math.min(3, newDeck.length + i); i++){
      const newCard = newDeck.pop()
      if(!!newCard){
        newCard.shown = true
        newCard.location = "playable"
        moved.push(newCard)
        newGameCards.Playable.push(newCard)
      } 

    }
    newGameCards.previousMoves.push({cardsMoved: moved, location: "deck"})
    setDeck(newDeck)
    setGameCards(newGameCards)
  }

  const flipSpider = () => {
    const newDeck = [...deck]
    const newGameCards = {...gameCards}
    for(let i = 0; i < 7; i++){
      const newCard = newDeck.pop()
      if(typeof newCard !== "undefined"){
        newCard.shown = true
        newCard.location = `column${i}`
        newGameCards.Columns[i].push(newCard)
      }
    }
    newGameCards.previousMoves.push({cardsMoved: [
      newGameCards.Columns[0][newGameCards.Columns[0].length - 1],
      newGameCards.Columns[1][newGameCards.Columns[1].length - 1],
      newGameCards.Columns[2][newGameCards.Columns[2].length - 1],
      newGameCards.Columns[3][newGameCards.Columns[3].length - 1],
      newGameCards.Columns[4][newGameCards.Columns[4].length - 1],
      newGameCards.Columns[5][newGameCards.Columns[5].length - 1],
      newGameCards.Columns[6][newGameCards.Columns[6].length - 1],
    ], location: "deck"})
    setDeck(newDeck)
    setGameCards(newGameCards)
  }



  const resetDeck = () => {
    const newDeck = [...deck]
    const newGameCards = {...gameCards}
    while(newGameCards.Playable.length > 0){
      const remove = newGameCards.Playable.shift()
      if(!!remove){
        remove.location = "deck"
        remove.shown = false
        newDeck.unshift(remove)
      }
    }
    newGameCards.previousMoves.push({cardsMoved: [], location: "reset"})
    setDeck(newDeck)
    setGameCards(newGameCards)
  }

  const undoMove = () => {
    const newGameCards = {...gameCards}
    const previousMove = newGameCards.previousMoves.pop()
    if(previousMove){
      const {cardsMoved, location} = previousMove
      if(location.slice(0, 6) === "column"){
        let removed = [removeFromPile(cardsMoved[0])].flat()
        const columnNum = Number(location.slice(6,7))
        const newGameCards = {...gameCards}

        if(newGameCards.Columns[columnNum][newGameCards.Columns[columnNum].length - 1] 
          === gameCards.ShownCards[gameCards.ShownCards.length - 1]){
            newGameCards.ShownCards[gameCards.ShownCards.length - 1].shown = false
            newGameCards.ShownCards.pop()
        }

        //hide card if it was the last card in the column
        

        for(let i = 0; i < removed.length; i++){
          removed[i].location = `column${columnNum}`
          newGameCards.Columns[columnNum].push(removed[i])
        }
      } else if(location === "playable"){
        let removed = [removeFromPile(cardsMoved[0])].flat()
        removed[0].location = "playable"
        newGameCards.Playable.push(removed[0])

      } else if(location === "clubs"){
        let removed = [removeFromPile(cardsMoved[0])].flat()
        removed[0].location = "clubs"
        newGameCards.Clubs.push(removed[0])

      } else if(location === "spades"){
        let removed = [removeFromPile(cardsMoved[0])].flat()
        removed[0].location = "spades"
        newGameCards.Spades.push(removed[0])

      } else if(location === "hearts"){
        let removed = [removeFromPile(cardsMoved[0])].flat()
        removed[0].location = "hearts"
        newGameCards.Hearts.push(removed[0])

      } else if(location === "diamonds"){
        let removed = [removeFromPile(cardsMoved[0])].flat()
        removed[0].location = "diamonds"
        newGameCards.Diamonds.push(removed[0])

        } else if(location === "deck"){
          let removed: card[] = []
          if(gameType === "normal"){
            const CM = cardsMoved.pop()
            
            if(!!CM){
              CM.location = "deck"
              CM.shown = false
              removed.push(removeFromPile(CM)[0])
            }
          }else if(gameType === "3card"){
            while(cardsMoved.length > 0){
              const CM = cardsMoved.pop()
              if(!!CM){
                CM.location = "deck"
                CM.shown = false
                removed.push(removeFromPile(CM)[0])
              }
              if(cardsMoved.length > 0){
                newGameCards.previousMoves.pop()
              }
            }
          }else if(gameType === "spider"){
            for(let i = 0; i < 7; i++){
              const CM = cardsMoved.pop()
              if(!!CM){
                CM.location = "deck"
                CM.shown = false
                removed.push(removeFromPile(CM)[0])
              }
            }
            if(cardsMoved.length > 1){
              newGameCards.previousMoves.pop()
            }
          }
          const newDeck = [...deck]
          while(removed.length > 0){
            const newCard = removed.pop()
            if(typeof newCard !== "undefined"){
              newDeck.push(newCard)
              newGameCards.ShownCards.pop()
            }
            
        }
        setDeck(newDeck)
      } else if(location === "reset"){
        const newDeck = [...deck]
        while(newDeck.length > 0){
          const newCard = newDeck.pop()
          if(!!newCard){
            newCard.location = "playable"
            newCard.shown = true
            newGameCards.Playable.push(newCard)
            !newGameCards.ShownCards.includes(newCard) && newGameCards.ShownCards.push(newCard)
          }
        }
        setDeck(newDeck)
      }
      if(location !== "reset"){
        newGameCards.previousMoves.pop()
      }
      setGameCards(newGameCards)
    }
  }

  const playForYou = () => {
    setCount(prevCount => prevCount + 1)

    if(searchForNewShown()){
      prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
      setDeckFlipped(false)
      return true
    }
    for(let i = 0; i < 7; i++){
      const shown = gameCards.Columns[i].filter((C) => C.shown)
      for(let j = 0; j < shown.length; j++){
        if(!(shown[j].value === 13 || shown[j].value === 26 || shown[j].value === 39 || shown[j].value === 52)
          && !prevClicked.includes(shown[j]) 
          && searchPlaceable(shown[j])
        ){
          setDeckFlipped(false)
          return true
        }
      }
    }
    if(searchPlaceable(gameCards.Playable[gameCards.Playable.length - 1])){
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
      if(gameCards.Playable.length > (gameType === "normal" ? 1 : 3) && !deckFlipped){
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
            const time = 3000 / props.playForYou

            const playForYouTimer = setInterval(() => {
              playForYou()}, time)

            return () => clearInterval(playForYouTimer)
          }
        }
      }else {
        if(props.roboPlayer > 0){
          const time = 1500 / props.roboPlayer
          const roboPlayerTimer = setInterval(() => {
            playForYou()}, time)

            return () => clearInterval(roboPlayerTimer)
        }   
      }
    }
    
  }, [isGameRunning, props.playForYou, props.playForYouToggle, props.roboPlayer, deck, gameCards, count])

  return {
    ...props,
    deck,
    gameCards,
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