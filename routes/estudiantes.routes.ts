import { Router } from 'express'
import {  } from '../controllers/estudiantes.controller'

const router = Router();

router.route('/')
    // .get(getPosts)
    // .post(createPost);

router.route('/:estudiantesId')
    // .get(getPost)
    // .delete(deletePost)
    // .put(updatePost);

export default router;