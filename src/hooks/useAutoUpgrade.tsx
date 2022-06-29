import {useEffect} from "react"

interface useAutoUpgradeProps{
  autoUpgrade: boolean,
  points: number,
  playForYouCost: number,
  roboPlayerCost: number,
  playForYouIncreased: ()=>void,
  roboPlayerIncreased: ()=>void,
}

const autoUpgrade = (props: useAutoUpgradeProps) => {
  useEffect(() => {
    if(props.autoUpgrade){
      if(props.points >= props.playForYouCost){
        props.playForYouIncreased()
      }
      if(props.points >= props.roboPlayerCost){
        props.roboPlayerIncreased()
      }
    }
  }, [props.autoUpgrade, props.points, props.playForYouCost, props.roboPlayerCost, props.playForYouIncreased, props.roboPlayerIncreased])
}

export default autoUpgrade