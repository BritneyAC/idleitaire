import useBoardElements from "../hooks/useBoardElements"


export default function Board(props){ 
  const {
    isGameRunning,
    RestartGame,
    StartGame,
    gamePoints,
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
  } = useBoardElements({...props})
  
  return(
    <div className="board" data-info-shown={props.isInfoShown ? "true" : "false"}>
      { isGameRunning ?
        <>
          <div className="board--playspace">
            <div className="board--top">
              <div className="board--win-piles">
                <div className="board--clubs">{ClubsElements}</div>
                <div className="board--spades">{SpadesElements}</div>
                <div className="board--hearts">{HeartsElements}</div>
                <div className="board--diamonds">{DiamondsElements}</div>
              </div>
              <div className="board--deck">
                {DeckElements}
              </div>
              <div className="board--playable">
                {PlayableElements}
              </div>
            </div>
            <div className="board--main">
              <div className="board--column-0">{Column1Elements}</div>
              <div className="board--column-1">{Column2Elements}</div>
              <div className="board--column-2">{Column3Elements}</div>
              <div className="board--column-3">{Column4Elements}</div>
              <div className="board--column-4">{Column5Elements}</div>
              <div className="board--column-5">{Column6Elements}</div>
              <div className="board--column-6">{Column7Elements}</div>
              <p className="board--points">Points: {gamePoints}</p>
            </div>
          </div>
          {/* hopefully make a confirmation dialog box eventually */}
          <button className="board--btn" onClick={RestartGame}>Restart Game</button>
        </> :
        <button className="board--btn" onClick={StartGame}>Start Game</button>
      }
    </div>
  )
}