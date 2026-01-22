import express from 'express'
import libRouter from './libJsRouter';
import { packageRouter } from './packageJsRouter';

const mainRouter = express.Router();
mainRouter.use('/lib', libRouter);
mainRouter.use('/package', packageRouter);

export default mainRouter;