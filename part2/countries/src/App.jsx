import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Display from './components/Display'
import Filter from './components/Filter'

const App = () => {

  const [countries,setCountries] = useState([])
  const [display,setDisplay] = useState([])
  const [filter,setFilter] = useState('')

  const hook = () => {
    const result = axios.get("https://restcountries.com/v3.1/all")
                        .then(response => {
                          setDisplay(response.data)
                          setCountries(response.data)
                        })
  }
  useEffect(hook,[])

  const onChange = (e) =>{
    setFilter(e.target.value)
    const reg = new RegExp(e.target.value,'i')
    const filterdCountries = countries.filter(country => country.name.official.match(reg))
    setDisplay(filterdCountries)
  }

  return (
    <div>
      <Filter filter={filter} onChange={onChange}/>
      <Display countries={display} />
    </div>
  )
}

export default App