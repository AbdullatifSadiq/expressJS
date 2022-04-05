const express = require('express')
const path = require('path')
const logger = require('./Middleware/logger')

const app = express()

// Init middleware
// app.use(logger)

// Body Parser middleware
app.use(express.json())
// handle for submission
app.use(express.urlencoded({extended:false}))

//  Set static folder
app.use(express.static(path.join(__dirname,'public')))

// Members API ROUTES
app.use('/api/members', require('./Routes/api/members'))
const PORT = process.env.PORT || 2000

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)) 