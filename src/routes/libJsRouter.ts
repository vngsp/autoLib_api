import express from 'express'
import { deleteLibController, libController, libsCreateController } from '../controllers/libJsController';

const libRouter = express.Router();

libRouter.post('/create', libController);
libRouter.post('/bulk', libsCreateController);
libRouter.delete('/delete/:id', deleteLibController);

export default libRouter;