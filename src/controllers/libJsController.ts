import { RequestHandler } from "express";
import { createLibData, createManyLibsData, createPackageManager, deleteLib } from "../services/libJsService";

export const createPackageManagerController: RequestHandler = async (req, res) => {
    try {
        const { name, install } = req.body;
        const newPackageManager = await createPackageManager({ name, install });

        res.status(201).json(newPackageManager);
    }catch(err: any) {
        res.status(400).json({ error: err.message });
    }
}

export const libController: RequestHandler = async (req, res) => {
    try {
        const { name, category, install, packageManager } = req.body;
        const newLib = await createLibData({ name, category, install, packageManager });

        res.status(201).json(newLib);
    } catch(err: any) {
        res.status(400).json({ error: err.messsage })
    }
}

export const libsCreateController: RequestHandler = async (req, res) => {
    try {
        const data = req.body;

        if(!Array.isArray(data) || !data.length) {
            return res.status(400).json({ error: 'Invalid body format' });
        }

        const newLib = await createManyLibsData(data);

        res.status(201).json(newLib);
    } catch(err: any) {
        res.status(400).json({ error: err.messsage })
    }
}

export const deleteLibController: RequestHandler = async (req, res) => {
    try {
        const id  = Number(req.params.id);
        const deletedUser = await deleteLib(id);

        res.status(201).json(deletedUser);
    } catch (err: any) {
        res.status(400).json({ err: err.message })
    }
}