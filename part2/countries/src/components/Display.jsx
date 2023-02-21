import React,{useState} from 'react'
import Country from './Country'

const Display = ({countries}) => {
    const [country,setCountry] = useState([]);

    const onShow = (id) =>{
        setCountry(countries[id])
    }
    if(countries.length==1){
        return <Country country={countries[0]} />
    }
    else if(countries.length==0){
        return <p>No countries found</p>
    }
    else if(countries.length>10){
        return <p>Too many matches, specify another filter</p>
    }
    else{
        return (
            <div>
                {countries.map((country,id)=>
                <p>
                    {country.name.common}
                    <button onClick={()=>onShow(id)}>show</button>
                    </p>
                )}
                <Country country={country} />
            </div>
          )
    }
    
  
}

export default Display