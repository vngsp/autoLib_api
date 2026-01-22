import express from 'express';
import { createPackageManagerController } from '../controllers/libJsController';

export const packageRouter = express.Router();

packageRouter.post('/create', createPackageManagerController);