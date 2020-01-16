"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonserver = require('json-server'); var jsonServer = _interopRequireWildcard(_jsonserver);




const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

var _auth = require('./auth'); var _auth2 = _interopRequireDefault(_auth);
var _authz = require('./authz'); var _authz2 = _interopRequireDefault(_authz);

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.post('/login', _auth2.default.handleAuthentication)
server.use('/orders', _authz2.default.handleAuthorization)

server.use(router)
/*
const options = {
    cert: fs.readFileSync('./keys/cert.pem'),
    key: fs.readFileSync('./keys/key.pem')
}
 Caso de utilizar o protocolo https
https.createServer(options, server).listen(3001, () => {
    console.log('JSON Server is running')
})
*/
server.listen(3001, () => {
    console.log('JSON Server is running')
})