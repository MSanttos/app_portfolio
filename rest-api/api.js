const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = express()
const port = 3000
const router = express.Router()
const portfolioRouter = require('./router/portfolioRouter')

api.use(cors())

api.use(bodyParser.urlencoded({ extended: true }))
api.use(bodyParser.json())

router.get('/', (req, res) => {
  res.json({ message: 'API successfully initialized!' })
})

api.use('/', router)

api.use('/portfolio', portfolioRouter)

api.listen(port, () => {

  console.log('')
  console.log('API successfully initialized!')
  console.log('')
  console.log('Server is up and running on port number ' + port +'!')
  console.log('')
  console.log('Connection to database established successfully!')
  console.log('')
  console.log('API is ready to use!')
  console.log('')
  
})