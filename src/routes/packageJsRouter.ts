import express from 'express';
import { createPackageManagerController, deletePackageManagerController, readPackageManagerController, updatePackageManagerController } from '../controllers/packageManagerController';

export const packageRouter = express.Router();

packageRouter.post('/create', createPackageManagerController);
packageRouter.delete('/delete/:id', deletePackageManagerController);
packageRouter.put('/update/:id', updatePackageManagerController);
packageRouter.get('/read', readPackageManagerController);