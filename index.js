const express = require('express')
const path = require('path')
const members = require('./Members')
const logger = require('./Middleware/logger')

const app = express()

// Init middleware
// app.use(logger)

// Basic REST API that saves JSON through Postman // Get all members
app.get('/api/members',(req,res)=>{
    res.json(members)
}) 

// Get Single member using ID
// app.get('/api/members/:id', (req, res)=>{
//     res.json(members.filter(member => {
//         member.id === parseInt(req.params.id)
//     }))
// })
app.get('/api/members/:id',(req,res) =>{
    res.json(members.filter (member => 
        member.id === parseInt(req.params.id)  ))
})

//  Set static folder
app.use(express.static(path.join(__dirname,'public')))

const PORT = process.env.PORT || 2000

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)) 