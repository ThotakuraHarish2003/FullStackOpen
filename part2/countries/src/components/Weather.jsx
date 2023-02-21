import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Weather = ({city}) => {
    const [weather,setWeather] = useState([])
    const appid ="ee"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appid}`
    const hook = () =>{
        axios.get(url)
            .then(response=>{
                setWeather(response.data);
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
    }
    useEffect(hook,[])

    if(weather.length==0){
        return(<></>)
    }
  return (
    <div>
        <h1>Weather in {city}</h1>
        <p>temperature {weather.main.temp}</p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
        <p>wind {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Weather