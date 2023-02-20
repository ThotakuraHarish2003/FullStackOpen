import React,{useState} from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName,setNewName] = useState('')

  const handleNameChange =(e) =>{
    e.preventDefault()
    setNewName(e.target.value)
  }

  const addPerson = (e) =>{
    e.preventDefault();
    const person = {name:newName};
    setPersons(persons.concat(person))
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          name : 
          <input value={newName} onChange={handleNameChange}/>
        </div>
        <button type='submit'>add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return <p>{person.name}</p>
      })}
    </div>
  )
}

export default App