const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content parts={[{name:part1, exercises:exercises1},{name:part2, exercises:exercises2},{name:part3, exercises:exercises3}]}/>
      <Total num={exercises1+exercises2+exercises3}/>
    </div>
  )
}
const Header = ({course})=>{
  return(
    <h1>{course}</h1>
  )
}
const Content = ({parts}) =>{
  return[
    parts.map((part)=>{
      return(<Part part={part}/>)
    })
  ]
}
const Part = ({part}) =>{
  return(<p>{part.name} {part.exercises}</p>)
}
const Total = ({num}) =>{
  return(<p>Number of exercises {num}</p>)
}
export default App