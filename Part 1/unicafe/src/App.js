import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good+1)
  const increaseNeutral = () => setNeutral(neutral+1)
  const increaseBad = () => setBad(bad+1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text={'good'}/>
      <Button onClick={increaseNeutral} text={'neutral'}/>
      <Button onClick={increaseBad} text={'bad'}/>
      <Statistics stats={[good,neutral,bad]}/>
    </div>
  )
}
const Button = (props) =>{
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}
const Statistics = ({stats}) =>{
  const sum = stats[0]+stats[1]+stats[2]
  const avag = (stats[0]-stats[2])/sum

  if(stats[0]+stats[1]+stats[2] === 0){
    return(
      <>
        <h1>Statistics</h1>
        <p>No feedbacks we're given</p>
      </>
    )
  }
  return(
    <>
      <h1>Statistics</h1>
      <StatisticLine text={'good'} value={stats[0]}/>
      <StatisticLine text={'neutral'} value={stats[1]}/>
      <StatisticLine text={'bad'} value={stats[2]}/>
      <StatisticLine text={'all'} value={sum}/>
      <StatisticLine text={'avarage'} value={avag}/>
      <StatisticLine text={'positive'} value={stats[0]/sum*100}/>
    </>
  )
}
const StatisticLine = (props) =>{
  return(
    <>
    <p>{props.text} {props.value}</p>
    </>
  )
}
export default App