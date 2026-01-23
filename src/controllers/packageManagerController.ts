import { RequestHandler } from "express";
import { createPackageManager, deletePackageManager, readPackageManager, updatePackageManager } from "../services/packageManagerService";

export const createPackageManagerController: RequestHandler = async (req, res) => {
    try {  
        const { name, install } = req.body;

        const newPackageManager = await createPackageManager({ name, install });
        res.status(201).json(newPackageManager);
    } catch(err: any) {
        res.status(400).json({ error: err.message });
    }
}

export const deletePackageManagerController: RequestHandler = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const deletedPackage = await deletePackageManager(id);  

        res.status(200).json(deletedPackage);
    } catch(err: any) {
        if(err.code === 'HAS_LIBS') {
            return res.status(400).json({ error: 'Cannot delete PackageManager: it has associated libs' });
        }
        res.status(500).json({ error: err.message });
    }
}

export const updatePackageManagerController: RequestHandler = async (req, res) => {
    try {
        const id  = Number(req.params.id);

        const { name, install } = req.body;
        const updatedPackage = await updatePackageManager({ name, install }, id);

        res.status(200).json(updatedPackage);
    } catch(err: any) {
        res.status(400).json({ error: err.message });
    }
}

export const readPackageManagerController: RequestHandler = async (req, res) => {
    try {
        const allPackages = await readPackageManager();

        res.status(200).json(allPackages);
    } catch(err: any) {
        res.status(400).json({ error: err.message });
    }
}