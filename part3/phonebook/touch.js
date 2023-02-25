const express = require('express')
const uuid = require('uuid')
const app = express()
const port = process.env.PORT || 5000

const data = [
    { 
      "id": uuid.v4(),
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": uuid.v4(),
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": uuid.v4(),
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": uuid.v4(),
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.use(express.json())

app.get('/',(req,res)=>{
    res.json(data)
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})


