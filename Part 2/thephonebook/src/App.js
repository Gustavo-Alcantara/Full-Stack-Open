import { useState, useEffect } from 'react'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])


  const handleNameChange = (event) => { setNewName(event.target.value) }
  const handleNumberChange = (event) =>{ setNewNumber(event.target.value) }

  const handleSubmit = (event) =>{
    event.preventDefault()

    var newperson = { 
      name: newName,
      number: newNumber 
    }

    console.log(newperson);

    if(persons.find(person => person.name === newperson.name)){
      alert(`${newName} already exists`);
    }
    else if(persons.find(person => person.number === newperson.number)){
      alert(`${newNumber} already exists`);
    }
    else{
      personService.create(newperson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        });
    }
  }
  const handleDelete = (event) =>{
    const id = event.currentTarget.id
    const name = event.target.getAttribute("data-name")
    const newpersons = persons.filter(person => person.name != name)
    console.log(newpersons)

    if(window.confirm(`Delete ${name}?`)){
      personService.Delete(id)
        .then(response =>{
          console.log(response)
          setPersons(newpersons)
      })
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons persons={persons} handleDelete={handleDelete}/>
    </div>
  )
}
const Persons = (props)=>{
  const persons = props.persons
  return(
    <ul>
      {persons.map(person => 
        <>
          <div>
            <li key={person.id}>{person.name}: {person.number}</li><button onClick={props.handleDelete} id={person.id} data-name={person.name}>Delete</button>
          </div>
        </>
      )}
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