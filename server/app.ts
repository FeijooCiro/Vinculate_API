import express, { Application } from 'express'
import cors from "cors"

import db from '../connection/connection'
// routes inpots

class Server {
    private app: Application
    private port: string
    private paths = {
        // paths of rouths
    }

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3000' 

        // Métodos iniciales
        this.views()
        this.dbConnection()
        this.middlewares()
        this.routes()
    }

    async dbConnection() {
        try {
            await db.authenticate()
            console.log('Database online')
        } catch (error) {
            throw new Error( String(error) )
        }
    }

    routes() {
        // especification of routes
    }
 
    middlewares() {
        this.app.use( cors())
        this.app.use( express.json() )
        this.app.use( express.static('client'))
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }

    views(){
        // paths to views
        // this.app.set('views', path.join(__dirname, 'client', '...'));
    }
}

export default Server