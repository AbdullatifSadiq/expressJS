const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const logger = require('./Middleware/logger')

const app = express()

// Init middleware
// app.use(logger)

// Handlebar middleware
app.engine('handlebars', exphbs.engine({defaultLayout:'main'}))
app.set('view engine','handlebars')


// Body Parser middleware
app.use(express.json())
// handle for submission 
app.use(express.urlencoded({extended:false}))

// Home page route
app.get('/', (req,res) => res.render('index'))

//  Set static folder
app.use(express.static(path.join(__dirname,'public')))

// Members API ROUTES
app.use('/api/members', require('./Routes/api/members'))
const PORT = process.env.PORT || 2000

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)) 