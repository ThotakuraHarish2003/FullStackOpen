const { response } = require('express')
const mongoose = require('mongoose')

const uri = ""

mongoose.connect(uri)

const contactSchema = new mongoose.Schema({
    name:String,
    number:Number
})

const Contact = mongoose.model("Contact",contactSchema)

//Super vunerable code here :)
if (process.argv.length<3){
    Contact.find({}).then(result =>{
        result.forEach(contact=>{
            console.log(contact.name," ",contact.number)
        })
    })
}
if (process.argv.length==4){
    const contact = new Contact({
        name:process.argv[2],
        number:Number(process.argv[3])
    })

    contact.save().then((response)=>{
        console.log(`added ${contact.name} ${contact.number} to your phonebook`)
    })
}

