export default function UpgradesPage(props){
  return(
    <div className="upgrade-page">
      <div className="upgrade">
        <p>RoboPlayer</p>
        <p>Plays games for you in the backgroud</p>
        <p>cost {upgrades.RoboPlayer.cost}</p>
        <button onClick={props.roboPlayerIncreased}>Upgrade</button>
      </div>
      <div className="upgrade">
        <p>Play For Me</p>
        <p>Plays the main game for you</p>
        <p>cost {upgrades.PlayForMe.cost}</p>
        <button onClick={props.playForMeIncreased}>Upgrade</button>
      </div>
    </div>
  )
}