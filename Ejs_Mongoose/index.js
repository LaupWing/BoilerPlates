const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')
const path       = require('path')

const app  = express()
const port = 3001

app
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname,'views'))
    .use(cors())
    .use(bodyParser.json({limit: '50mb'}))
    .use('/static',express.static(path.join(__dirname, 'public')))
    .use(userRoutes)
    .listen(port, ()=>console.log(`Server is listening to port ${port}`))