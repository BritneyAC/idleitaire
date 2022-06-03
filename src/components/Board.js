import useBoardElements from "../hooks/useBoardElements"


export default function Board(props){  
  const {
    isGameRunning,
    RestartGame,
    StartGame,
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
  } = useBoardElements(props)
  
  return(
    <div className="board">
      { isGameRunning ?
        <>
          <div className="board--win-piles">
            <div className="board--clubs">{ClubsElements}</div>
            <div className="board--diamonds">{DiamondsElements}</div>
            <div className="board--hearts">{HeartsElements}</div>
            <div className="board--Spades">{SpadesElements}</div>
          </div>
          <div className="board--deck">
            {DeckElements}
            {PlayableElements}
          </div>
          <div className="board--playspace">
            <div className="board--column">{Column1Elements}</div>
            <div className="board--column">{Column2Elements}</div>
            <div className="board--column">{Column3Elements}</div>
            <div className="board--column">{Column4Elements}</div>
            <div className="board--column">{Column5Elements}</div>
            <div className="board--column">{Column6Elements}</div>
            <div className="board--column">{Column7Elements}</div>
          </div>
          {/* hopefully make a confirmation dialog box eventually */}
          <p>Points: {props.userInfo.userPoints}</p>
          <button onClick={RestartGame}>Restart Game</button>
        </> :
        <button className="board--start" onClick={StartGame}>Start Game</button>
      }
    </div>
  )
}