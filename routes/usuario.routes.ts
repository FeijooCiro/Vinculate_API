import { Router } from 'express'

import controller from '../controllers/usuario.controller'

const usuarioRouter = Router()

usuarioRouter.route('/')
    .get(controller.getEntries)
    .post(controller.addEntry)

usuarioRouter.route('/:id')
    .get(controller.getEntry)
    .delete(controller.deleteEntry)
    .put(controller.updateEntry)

usuarioRouter.route('/login')
    .post(controller.loginWithEmailAndPassword)

export default usuarioRouter