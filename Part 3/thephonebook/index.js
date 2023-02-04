const express = require('express')
const app = express()
var today = new Date();

app.use(express.json())


let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
    }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})
app.get('/info', (req,res)=>{
    res.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${today}</p>
        `)
})
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id == id)
    
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
})
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.filter(person => person.id != id)
  
  response.status(204).end()
})

app.post('/api/persons/', (request, response) => {
  const person = request.body
  person.id = Math.floor(Math.random()*1000) + 1

  if(!person.name || !person.number){
    response.status(400).json({error:'Content missing'})
  }
  else if(persons.find(p => p.name === person.name) != undefined){
    response.status(400).json({error:'Name must be unique'})
  }
  else if(persons.find(p => p.number === person.number) != undefined){
    response.status(400).json({error:'Number must be unique'})
  }
  else{
    persons = persons.concat(person)
    response.json(person)
    response.status(204).end()
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})