import React from 'react'

const Persons = ({displayPersons}) => {
  return (
    <div>
      {displayPersons.map(person => {
        return <p>{person.name}:{person.number}</p>
      })}
    </div>
  )
}

export default Persons