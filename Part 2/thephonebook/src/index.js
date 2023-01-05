import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import axios from 'axios'

const promise = axios.get('http://localhost:3001/persons')
promise.then(response => {
    const persons = response.data
    console.log(persons)
})

ReactDOM.createRoot(document.getElementById('root')).render(<App />)