const authMiddleware = require('./authMiddleware');
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const bodyParser = require('body-parser')
const cors = require('cors')

server.use(cors())
server.use(bodyParser.json());
server.use(authMiddleware);
server.use(middlewares);
server.use(router);

server.listen(8000, () => {
  console.log('JSON Server is running')
})