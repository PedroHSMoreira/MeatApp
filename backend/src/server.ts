import * as jsonServer from 'json-server'

import * as fs from 'fs'
import * as https from 'https'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

import AuthMiddleware from "./auth";
import HandleAthorization from './authz'

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.post('/login', AuthMiddleware.handleAuthentication)
server.use('/orders', HandleAthorization.handleAuthorization)

server.use(router)

const options = {
    cert: fs.readFileSync('./keys/cert.pem'),
    key: fs.readFileSync('./keys/key.pem')
}


https.createServer(options, server).listen(3001, () => {
    console.log('JSON Server is running')
})