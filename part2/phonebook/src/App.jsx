import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([])
  const hook = () =>{
    axios.get("http://localhost:3001/persons")
          .then(response => {
            setDisplayPersons(response.data)
            setPersons(response.data)})
  }

  useEffect(hook,[])

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