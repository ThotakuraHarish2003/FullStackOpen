import React,{useState} from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

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
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h1>add a new</h1>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons displayPersons={displayPersons} />
    </div>
  )
}

export default App