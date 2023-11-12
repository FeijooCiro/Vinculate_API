import { Router } from 'express'

import controller from '../controllers/compania.controller'

const companiaRouter = Router()

companiaRouter.route('/')
    .get(controller.getEntries)
    .post(controller.addEntry)

companiaRouter.route('/:id')
    .get(controller.getEntry)
    .delete(controller.deleteEntry)
    .put(controller.updateEntry)

export default companiaRouter