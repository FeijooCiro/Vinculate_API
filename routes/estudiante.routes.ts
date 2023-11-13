import { Router } from 'express'

import controller from '../controllers/estudiantes.controller'

const estudianteRouter = Router()

estudianteRouter.route('/')
    .get(controller.getEntries)
    .post(controller.addEntry)

estudianteRouter.route('/:id')
    .get(controller.getEntry)
    .delete(controller.deleteEntry)
    .put(controller.updateEntry)

export default estudianteRouter