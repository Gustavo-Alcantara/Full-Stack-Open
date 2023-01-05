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

  export default Courses