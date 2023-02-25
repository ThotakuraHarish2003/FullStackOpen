const express = require('express')
const uuid = require('uuid')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 5000
let data = [
    { 
      "id": "1",
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

const requestLogger = (req,res,next) =>{
    console.log('Method',req.method)
    console.log('Path',req.path)
    console.log('Body',req.body)
    console.log('---')
    next()
}


const unknownEndpoint = (req,res) => {
    res.status(404).json({error:'unkown point'})
}


app.use(express.json())
//app.use(requestLogger)
app.use(morgan('tiny'))
app.use(express.static('dist'))

app.get('/api/persons',(req,res)=>{
    res.json(data)
})

app.get('/info',(req,res)=>{
    res.send(`
    <p>Phonebook has info for ${data.length} people</p>
    <p>${new Date()}</p>
    `)
})

app.get('/api/persons/:id',(req,res)=>{
    const id = req.params.id;
    const note = data.find(note=>note.id==id)

    if(note){
        res.json(note)
    }else{
        res.status(404).end()
    }
})

app.delete('/api/persons/:id',(req,res)=>{
    const id = req.params.id;
    data = data.filter(person => person.id!==id)

    res.json({success:"completed deletion"})
})

app.post('/api/persons',(req,res)=>{
    const body = req.body
    console.log(body)
    if(body.number&&body.name){
        const newPerson ={
            id:uuid.v4(),
            name : body.name,
            number:body.number
        }
        if(data.find(person=>person.name==newPerson.name)){
            res.json({"error":"Name already present"})
        }
        data = data.concat(newPerson)
        res.send('Added data')
    }
    else{
        res.json({"error":"Data not Found"})
    }
    
})

app.use(unknownEndpoint)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})


