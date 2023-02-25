import React from 'react'

const Persons = ({displayPersons,handleDelete}) => {
  return (
    <div>
      {displayPersons.map(person => {
        return <p>{person.name}:{person.number} <button onClick={() => handleDelete(person.id)}>delete</button></p>
      })}
    </div>
  )
}

export default Persons