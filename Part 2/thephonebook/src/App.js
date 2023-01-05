import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567' 
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => { setNewName(event.target.value) }
  const handleNumberChange = (event) =>{ setNewNumber(event.target.value) }

  const handleSubmit = (event) =>{
    event.preventDefault()

    var newperson = { 
      name: newName,
      number: newNumber 
    }

    console.log(newperson)

    if(persons.find(person => person.name === newperson.name)){
      alert(`${newName} already exists`)
    }
    else if(persons.find(person => person.number === newperson.number)){
      alert(`${newNumber} already exists`)
    }
    else{
      setPersons(persons.concat(newperson))
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons persons={persons}/>
    </div>
  )
}
const Persons = ({persons})=>{
  return(
    <ul>
      {persons.map(person => <li key={person.name}>{person.name}: {person.number}</li>)}
    </ul>
  )
}

const PersonForm = (props) =>{
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        name: <input onChange={props.handleNameChange}/>
        number: <input onChange={props.handleNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default App