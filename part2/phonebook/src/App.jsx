import React,{useState} from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number : "00000000"
  }
  ]) 
  const [newName,setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')

  const handleNameChange =(e) =>{
    e.preventDefault()
    setNewName(e.target.value)
  }

  const handleNumberChange =(e) =>{
    e.preventDefault()
    setNewNumber(e.target.value)
  }

  const addPerson = (e) =>{
    e.preventDefault();
    const filteredPerson = persons.filter(person => person.name ==newName);
    if(filteredPerson.length==0){
      const person = {name:newName,number:newNumber};
      setPersons(persons.concat(person))
    }
    else{
      window.alert(`${newName} is already added to phonebook`)
    }
    
  }
  return (
    <div>
      <h1>Phonebook</h1>
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
      {persons.map(person => {
        return <p>{person.name}:{person.number}</p>
      })}
    </div>
  )
}

export default App