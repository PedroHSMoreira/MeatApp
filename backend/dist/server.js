"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _jsonserver = require('json-server'); var jsonServer = _interopRequireWildcard(_jsonserver);

var _fs = require('fs'); var fs = _interopRequireWildcard(_fs);
var _https = require('https'); var https = _interopRequireWildcard(_https);

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.use(router)

const options = {
    cert: fs.readFileSync('./keys/cert.pem'),
    key: fs.readFileSync('./keys/key.pem')
}


https.createServer(options, server).listen(3001, () => {
    console.log('JSON Server is running')
})