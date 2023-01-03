import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>{setGood(good+1)}}>good</button>
      <button onClick={()=>{setNeutral(neutral+1)}}>neutral</button>
      <button onClick={()=>{setBad(bad+1)}}>bad</button>
      <Statistics stats={[good,neutral,bad]}/>
    </div>
  )
}
const Statistics = ({stats}) =>{
  return(
    <>
      <h1>Statistics</h1>
      <p>good {stats[0]}</p>
      <p>neutral {stats[1]}</p>
      <p>bad {stats[2]}</p>
      <p>all {stats[0]+stats[1]+stats[2]}</p>
    </>
  )
}
export default App