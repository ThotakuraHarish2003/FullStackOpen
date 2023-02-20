import React,{useState} from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [displayPersons,setDisplayPersons] = useState(persons); 
  const [newName,setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filter,setFilter] = useState('')

  const handleNameChange =(e) =>{
    e.preventDefault()
    setNewName(e.target.value)
  }

  const handleNumberChange =(e) =>{
    e.preventDefault()
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) =>{
    e.preventDefault()
    setFilter(e.target.value)
    const reg = new RegExp(e.target.value,'i')
    const filteredPerson = persons.filter(person=>person.name.match(reg))
    setDisplayPersons(filteredPerson)
    
  }

  const addPerson = (e) =>{
    e.preventDefault();
    const filteredPerson = persons.filter(person => person.name ==newName);
    if(filteredPerson.length==0){
      const person = {name:newName,number:newNumber};
      setDisplayPersons(persons.concat(person))
      setPersons(persons.concat(person))
      
    }
    else{
      window.alert(`${newName} is already added to phonebook`)
    }
    
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter show with <input value={filter} onChange={handleFilterChange}/>
      </div>
      <h1>add a new</h1>
      <form onSubmit={addPerson}>
        <div>
          name : 
          <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number :
          <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <button type='submit'>add</button>
      </form>
      <h2>Numbers</h2>
      {displayPersons.map(person => {
        return <p>{person.name}:{person.number}</p>
      })}
    </div>
  )
}

export default App