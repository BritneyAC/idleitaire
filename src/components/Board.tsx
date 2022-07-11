import type { User } from "@/hooks/useUserInfo"
import useBoardElements from "@/hooks/useBoardElements"
import styles from "@/styles/css/Board.module.css"
import { useEffect, useMemo, useRef, useState } from "react"
import type {card} from "@/hooks/useGameLogic"

interface BoardProps {
  gamesWonIncreased: ()=>void,
  increasePoints: (points: number)=>void,
  saveUserInfo: ()=>void,
  userInfo: User,
  currentGame: string,
  whichInfoSettingShown: string,
  toggleInfoSetting: (currentTab: string)=>void,

  playForYou: number,
  roboPlayer: number,
  playForYouToggle: boolean,
  changeCurrentGame: (game: string)=>void,
}

const Board: React.FC<BoardProps> = (props) => { 
  const [start, setStart] = useState(true)
  const isDropped = useRef<boolean>(false)
  const cardDragged = useRef<card | null>(null)
  const draggedTo = useRef<number | null>(null)
  const currentHome = useRef<number | null>(null)
  const draggedFrom = useRef<number | null>(null)
  const undone = useRef<boolean>(false)

  
  
  const handleDragStart = (id: number) => {
    undone.current = false
    isDropped.current = false
    cardDragged.current = gameCards.AllCards.filter(card => card.value === id)[0]
    const location = cardDragged.current.location
    if(location === "clubs" || location === "spades" || location === "diamonds" || location === "hearts") {
      draggedFrom.current = 7
      currentHome.current = 7
    } else if(location.slice(0,6) === "column") {
      currentHome.current = Number(location.slice(6,7))
      draggedFrom.current = currentHome.current
    } else if(location.slice(0, 8) === "playable"){
      draggedFrom.current = 8
      currentHome.current = 8
    }
  }

  const handleDragEnd = () => {
    const dropped = isDropped.current 
    const drggdTo = Number(draggedTo.current)
    const crrntHm = Number(currentHome.current)
    cardDragged.current = null
    draggedTo.current = null
    undone.current = false
    isDropped.current = false
    
  }

  
  const {
    gameCards,
    deck,
    RestartGame,
    EndGame,
    gameType,
    undoMove,
    gamePoints,
    removeFromPile,
    setGameCards,
    prevClicked,
    setPrevClicked,
    prevClickedCount,
    setPrevClickedCount,
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
  } = useBoardElements({...props, cardDragged, handleDragStart, handleDragEnd})
  
  const [cards, setCards] = useState<NodeListOf<Element>>()
  useEffect(()=>{
    setCards(document.querySelectorAll(".card"))
  }, [gameCards, deck])
  
  useEffect(()=>{
    if(cards){
      cards.forEach(card => {
        card.addEventListener("dragstart", ()=>{
          handleDragStart(Number(card.id))})
        card.addEventListener("dragend", handleDragEnd)
  })}}, [cards])

  const confirmation = (confirmationShown: string = props.whichInfoSettingShown) => {
    let confirm
    if(confirmationShown === "restart"){
      confirm = <div>
      <h1>Are you sure you want to restart the game?</h1>
    </div>
    } else if(confirmationShown === "end"){
      confirm = <div>
        <h1>
          Are you sure you want to end the game?
        </h1>
        <h1>
          And go back to the main menu?
        </h1>
      </div>
    }
    if(!!confirm){
      const handleClick = (confirm: string = props.whichInfoSettingShown) => {
        if(confirm === "restart"){
          RestartGame()
        } else if(confirm === "end"){
          EndGame()
          props.changeCurrentGame("menu")
        }
        props.toggleInfoSetting("none")
      }

      return(
        <>
          {confirm}
          <div className={styles.confirmBtn} onClick={()=>handleClick()}>
            <h1>Yes</h1>
          </div>
          <div className={styles.confirmBtn} onClick={()=>props.toggleInfoSetting("none")}>
            <h1>No</h1>
          </div>
        </>
  )}
}

  const isOpen = () => {
    if(!start && props.whichInfoSettingShown !== "none"){
      return `${styles.buttons} ${styles.open}`
    }
    return styles.buttons
  }

  useEffect(() =>{
    setStart(false)
  },[])
  
  const confirmOpen = () => {
    if(props.whichInfoSettingShown === "restart" || props.whichInfoSettingShown === "end"){
      return `${styles.confirmation} ${styles.shown}`
    }
    if(props.whichInfoSettingShown !== "none"){
      return `${styles.confirmation} ${styles.open}`
    } else {
      return styles.confirmation
    }
  }

  
  const searchDroppable = (location: number) => {
    const card = cardDragged.current
    const newGameCards = {...gameCards}
    if(!!card){
      if( location === 7 && card.value === 1 || (gameCards.Clubs.length > 0 && gameCards.Clubs[gameCards.Clubs.length - 1].value + 1 === card.value) ){
        let removed = [removeFromPile(card)].flat()[0]
        removed.location = `clubs`
        newGameCards.Clubs.push(removed)
        setGameCards(newGameCards)
        prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
        return true
      } else if( location === 7 && card.value === 14 || (gameCards.Spades.length > 0 && gameCards.Spades[gameCards.Spades.length - 1].value + 1 === card.value) ){
        let removed = [removeFromPile(card)].flat()[0]
        removed.location = `spades`
        newGameCards.Spades.push(removed)
        setGameCards(newGameCards)
        prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
        return true
      } else if( location === 7 && card.value === 27 || (gameCards.Hearts.length > 0 && gameCards.Hearts[gameCards.Hearts.length - 1].value + 1 === card.value) ){
        let removed = [removeFromPile(card)].flat()[0]
        removed.location = `hearts`
        newGameCards.Hearts.push(removed)
        setGameCards(newGameCards)
        prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
        return true
      } else if( location === 7 && card.value === 40 || (gameCards.Diamonds.length > 0 && gameCards.Diamonds[gameCards.Diamonds.length - 1].value + 1 === card.value) ){
        let removed = [removeFromPile(card)].flat()[0]
        removed.location = `diamonds`
        newGameCards.Diamonds.push(removed)
        setGameCards(newGameCards)
        prevClickedCount > 0 && setPrevClickedCount(prevCount => prevCount - 1)
        return true
      }
      if(location < 7){
        if( card.value === 13 || card.value === 26 || card.value === 39 || card.value === 52 
        ){
        if(newGameCards.Columns[location].length === 0){
          let removed = removeFromPile(card).flat()
          for(let j = 0; j < removed.length; j++){
            removed[j].shown = true
            removed[j].location = `column${location}`
            newGameCards.Columns[location].push(removed[j])
          }
          setGameCards(newGameCards)
          return true
        }}
        if( card.value < 27 ){
          let testNum = card.value
          if(card.value > 13){
            testNum = card.value - 13
          }
          if(newGameCards.Columns[location].length > 0){
            let destination = gameCards.Columns[location][gameCards.Columns[location].length - 1].value
            if(destination > 39){
              destination = destination - 39
            } else if(40 > destination && destination > 26){
              destination = destination - 26
            }
            if(
              destination - 1 === testNum
              && gameCards.Columns[location][gameCards.Columns[location].length -1].value > 26
            ){
              let removed = removeFromPile(card)
              for(let j = 0; j < removed.length; j++){
                const rmvd = removed[j]
                if(!!rmvd){
                  rmvd.shown = true
                  rmvd.location = `column${location}`
                  newGameCards.Columns[location].push(rmvd)
                }
              }
            setPrevClicked(prev => [...prev, card])
            setGameCards(newGameCards)
            return true
        }}}else if( card.value > 26 ){ 
          let testNum = card.value
          if(card.value > 39){
            testNum = card.value - 39
          } else{
            testNum = card.value - 26
          }
          if(gameCards.Columns[location].length > 0){
            let destination = gameCards.Columns[location][gameCards.Columns[location].length - 1].value
            if(27 > destination && destination > 13){
              destination = destination - 13
            }
            if(
              destination - 1 === testNum
              && gameCards.Columns[location][gameCards.Columns[location].length -1].value < 27
              ){
                let removed = removeFromPile(card).flat()
                for(let j = 0; j < removed.length; j++){
                  const rmvd = removed[j]
                  if(!!rmvd){
                    rmvd.shown = true
                    rmvd.location = `column${location}`
                    newGameCards.Columns[location].push(rmvd)
                  }
                }
                setPrevClicked(prev => [...prev, card])
                setGameCards(newGameCards)
                return true
            }
        }}
      }
      }
  }


  // unused as of now because it wasn't properly hiding newly shown cards
  const handleDrop = (dropped: boolean, drggdTo: number, crrntHm: number) => {
    if(dropped && drggdTo !== crrntHm && !undone.current){
      undoMove()
      setPrevClicked(prev => {
        prev.pop()
        return [...prev]
      })
      const newGameCards = {...gameCards}
      if(Number(draggedFrom.current) < 7){
        if(newGameCards.Columns[Number(draggedFrom.current)][newGameCards.Columns[Number(draggedFrom.current)].length - 1] 
          === newGameCards.ShownCards[newGameCards.ShownCards.length - 1]){
            newGameCards.ShownCards[newGameCards.ShownCards.length - 1].shown = false
            newGameCards.ShownCards.pop()
            setGameCards(newGameCards)
        }
      }
      undone.current = true
      return false
    }
    return true
  }

  

  const handleDragOver = (id: number) => {
    if(draggedTo.current !== id){
      draggedTo.current = id
    }
    if(currentHome.current !== id && searchDroppable(id)){
      if(draggedFrom.current !== currentHome.current){
        undoMove()
        undoMove()
        searchDroppable(id)
        setPrevClicked(prev => {
          prev.pop()
          prev.pop()
          return [...prev]
        })
      }
      currentHome.current = id
      isDropped.current = true
    }
  }

  
  return(
    <>
      <div className={styles.playspace}>
        <div data-game-type={gameType} className={styles.top}>
          <div className={styles.winPiles} onDragOver={() => handleDragOver(7)}>
            <div className={styles.clubs}>{ClubsElements}</div>
            <div className={styles.spades}>{SpadesElements}</div>
            <div className={styles.hearts}>{HeartsElements}</div>
            <div className={styles.diamonds}>{DiamondsElements}</div>
          </div>
          <div className={styles.deck}>
            {DeckElements}
          </div>
          {gameType != "spider" && <div className={styles.playable}>
            {PlayableElements}
          </div>}
        </div>
        <div className={styles.main}>
          <div className={styles.column0} onDragOver={() => handleDragOver(0)}>{Column1Elements}</div>
          <div className={styles.column1} onDragOver={() => handleDragOver(1)}>{Column2Elements}</div>
          <div className={styles.column2} onDragOver={() => handleDragOver(2)}>{Column3Elements}</div>
          <div className={styles.column3} onDragOver={() => handleDragOver(3)}>{Column4Elements}</div>
          <div className={styles.column4} onDragOver={() => handleDragOver(4)}>{Column5Elements}</div>
          <div className={styles.column5} onDragOver={() => handleDragOver(5)}>{Column6Elements}</div>
          <div className={styles.column6} onDragOver={() => handleDragOver(6)}>{Column7Elements}</div>
          {gameCards.previousMoves.length > 0 && <button className={styles.undo} onClick={undoMove}>undo</button>}
          <p className={styles.points}>Points: {gamePoints}</p>
        </div>
      </div>
      <div className={isOpen()}>
        <div className={`${styles.btn} ${props.whichInfoSettingShown === "restart" && styles.current}`} onClick={()=>props.toggleInfoSetting("restart")}>
          <h1>Restart Game</h1>
        </div>
        <div className={`${styles.btn} ${props.whichInfoSettingShown === "end" && styles.current}`} onClick={()=>props.toggleInfoSetting("end")}><h1>End Game</h1></div>
      </div>
      <div className={confirmOpen()}>
        {(props.whichInfoSettingShown === "end" || props.whichInfoSettingShown === "restart") && confirmation()}
      </div>
    </>
  )
}

export default Board