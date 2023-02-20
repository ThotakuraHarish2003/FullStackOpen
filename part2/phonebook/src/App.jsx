import React,{useState,useEffect} from 'react'
import axios from 'axios'
import noteService from './services/note'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([])
  const hook = () =>{
    noteService.get()
          .then(response => {
            setDisplayPersons(response)
            setPersons(response)}
            )
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

  const deletePerson =(id) => {
    if(window.confirm("do u want to delete")){
      noteService.del(id)
        .then(console.log('deleted'))
    setDisplayPersons(displayPersons.filter(person => person.id!=id))
    setPersons(persons.filter(person=>person.id!=id))
    }
    
  }

  const addPerson = (e) =>{
    e.preventDefault();
    const person = {name:newName,number:newNumber,id:persons.length+1};
    const filteredPerson = persons.filter(person => person.name ==newName);
    if(filteredPerson.length==0){
      setDisplayPersons(persons.concat(person))
      setPersons(persons.concat(person))
      noteService.add(person)
      .then(response =>console.log(response))
    }
    else{
      window.confirm(`${newName} is already added to phonebook Do u want to replace the number`)
      const filterd = persons.filter(person => person.name==newName)
      noteService.update(filterd[0].id,person).then(
        console.log('updated')
      )

    }


  }
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h1>add a new</h1>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons displayPersons={displayPersons} handleDelete={deletePerson}/>
    </div>
  )
}

export default App