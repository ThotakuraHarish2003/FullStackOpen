import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Weather = ({city}) => {
    const [weather,setWeather] = useState('')
    const appid = "ee"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appid}`
    const hook = () =>{
        axios.get(url)
            .then(response=>{
                setWeather(response.data);
                console.log(response)
            })
    }
    useEffect(hook,[])
  return (
    <div>Weather</div>
  )
}

export default Weather