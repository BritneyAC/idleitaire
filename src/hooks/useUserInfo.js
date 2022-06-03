export default function useUserInfo(){
  const [userInfo, setUserInfo] = useState({
    userPoints: 0,
    gamesWon: 0,
    roboPlayer: 0,
    playForYou: 0,
  })

  const gamesWonIncreased = () => {
    setUserInfo(prevInfo => ({...prevInfo, gamesWon: prevInfo.gamesWon + 1}))
  }
  
  const roboPlayerIncreased = () => {
    setUserInfo(prevInfo => ({...prevInfo, roboPlayer: prevInfo.roboPlayer + 1}))
  }
  
  const playForYouIncreased = () => {
    setUserInfo(prevInfo => ({...prevInfo, playForYou: prevInfo.playForYou + 1}))
  }

  const saveUserInfo = () => {
    
  }

  return {gamesWonIncreased, roboPlayerIncreased, playForYouIncreased, saveUserInfo}
}