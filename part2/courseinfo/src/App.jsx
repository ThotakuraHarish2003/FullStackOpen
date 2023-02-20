import React from 'react'

const Header =({text}) =>{
  return(
    <h1>{text}</h1>
  )
}

const Content =({parts}) =>{
  return(
    <>
    {parts.map(part => <p>{part.name} {part.exercises}</p>)}
    <p><b>total of  {parts.reduce((sum,p)=>{
      return sum+=p.exercises
    },0)}</b></p>
    </>
  )
}

const Course =({course}) =>{
  return(
    <>
      <Header text={course.name} />
      <Content parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <Course course={course} />
  )
}

export default App