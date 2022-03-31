const express = require('express')
const path = require('path')

const app = express()
// JSON 'file'
const members = [
    {
        id:1,
        name: 'Shannon Mensah',
        email:'shannon@gmail.com',
        status:'active'

    },
    {
        id:2,
        name: 'Kezia Mensah',
        email:'kezia@gmail.com',
        status:'inactive'

    },
    {
        id:3,
        name: 'Tariq Mensah',
        email:'Tariq @gmail.com',
        status:'inactive'

    },
]

// Basic REST API that saves JSON through Postman

app.get('/api/members',(req,res)=>{
    res.json(members)
})
//  Set static folder
app.use(express.static(path.join(__dirname,'public')))

const PORT = process.env.PORT || 2000

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)) 