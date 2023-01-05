import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleSubmit = (event) =>{
    event.preventDefault()
    var newperson = {name: newName}
    setPersons(persons.concat(newperson))
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}
const Persons = ({persons})=>{
  return(
    <ul>
      {persons.map(person => <li key={person.name}>{person.name}</li>)}
    </ul>
  )
}
export default App