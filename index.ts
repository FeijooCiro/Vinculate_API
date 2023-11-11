import dotenv from 'dotenv'
import Server from './server/app'

dotenv.config()

const server = new Server()

server.listen() 