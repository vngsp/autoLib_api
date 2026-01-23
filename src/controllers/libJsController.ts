import { RequestHandler } from "express";
import { createLibData, createManyLibsData, deleteLib, deleteManyLibs, readLib, readLibByPack, updateLib } from "../services/libJsService";

export const createLibController: RequestHandler = async (req, res) => {
    try {
        const { name, category, install, packageManager } = req.body;
        const newLib = await createLibData({ name, category, install, packageManager });

        res.status(201).json(newLib);
    } catch(err: any) {
        res.status(400).json({ error: err.messsage })
    }
}

export const createLibsController: RequestHandler = async (req, res) => {
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
        const deletedLib = await deleteLib(id);

        res.status(200).json(deletedLib);
    } catch (err: any) {
        res.status(400).json({ err: err.message })
    }
}

export const deleteManyLibController: RequestHandler = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const deletedLibs = await deleteManyLibs(id);

        res.status(200).json(deletedLibs);
    } catch(err: any) {
        res.status(400).json({ err: err.message });
    }
}

export const updateLibController: RequestHandler = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!id) {
            return res.status(400).json({ error: 'Invalid id' });
        }

        const updatedLib = await updateLib(id, req.body);

        return res.status(200).json(updatedLib);
    }catch (err: any) {
        res.status(400).json({ err: err.message });
    }
}

export const readLibController: RequestHandler = async (req, res) => {
    try {
        const allLibs = await readLib();
        
        res.status(200).json(allLibs);
    } catch(err: any) {
        res.status(400).json({ error: err.message });
    }
}

export const readLibByPackController: RequestHandler = async (req, res) => {
    try {
        const packageManagerId = Number(req.params.packageManagerId); 
        const allLibsByPackage = await readLibByPack(packageManagerId);

        res.status(200).json(allLibsByPackage);
    } catch(err: any) {
        res.status(400).json({ error: err.message });
    }
}