export default function Stats(props){
  

  

  return(
    <div className="stats">
      <h1>Stats</h1>
      <p>Games won: {props.userInfo.gamesWon}</p>
      <p>Total points: {props.userInfo.userPoints}</p>
      <button onClick={props.saveUserInfo}>Save Game?</button>
    </div>
  )
}