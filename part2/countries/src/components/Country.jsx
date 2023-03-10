import React from 'react'
import Weather from './Weather'


const Country = ({country}) => {
    if(country.length==0){
        return(<></>)
    }
    return(
        <div>
            <h1>{country.name.official}</h1>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <h3>languages</h3>
            <ul>
                {Object.values(country.languages).map((lang) => <li>{lang}</li>)}
            </ul>
            <img alt={country.flags.alt} src={country.flags.png} />
            <Weather city={country.capital[0]} />
        </div>
  )
}

export default Country