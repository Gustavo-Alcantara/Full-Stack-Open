const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1,part2,part3]}/>
      <Total parts={[part1,part2,part3]}/>
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
const Total = ({parts}) =>{
  var sum = 0
  parts.forEach(part => {
    sum = sum + part.exercises
  });
  return(<p>Number of exercises {sum}</p>)
}
export default App