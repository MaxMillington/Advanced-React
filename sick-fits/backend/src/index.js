require('dotenv').config({ path: 'variables.env'})
const createServer = require('./createServer')
const db = require('./db')

const server = createServer()

//USE express middware to handle cookies (JWT) and populate current user

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  },

}, details => {
  console.log(`Server running on port http://localhost:${details.port}`)
})


