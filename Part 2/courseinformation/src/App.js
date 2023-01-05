const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      <Courses courses={courses}/>
    </div>
  )
}
const Courses = ({courses}) =>{
  return(
    courses.map(course => <Course course={course}/>)
  )
}
const Course = ({course}) =>{
  return(
    <div>
      <Header id={course.id} name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
const Header = (props)=>{
  return(
    <h1 id={props.id}>{props.name}</h1>
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
  return(<p id={part.id}>{part.name} {part.exercises}</p>)
}
const Total = ({parts}) =>{
  var sum = 0
  parts.forEach(part => {
    sum = sum + part.exercises
  });
  return(<b>total of exercises {sum}</b>)
}
export default App