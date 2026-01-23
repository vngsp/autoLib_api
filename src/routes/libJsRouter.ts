import express from 'express'
import { createLibController, createLibsController, deleteLibController, deleteManyLibController, readLibByPackController, readLibController, updateLibController } from '../controllers/libJsController';

const libRouter = express.Router();

libRouter.post('/create', createLibController);
libRouter.post('/bulk', createLibsController);
libRouter.delete('/delete/:id', deleteLibController);
libRouter.delete('/bulk/:id', deleteManyLibController);
libRouter.put('/update/:id', updateLibController);
libRouter.get('/read', readLibController);
libRouter.get('/read/:packageManagerId', readLibByPackController);

export default libRouter;