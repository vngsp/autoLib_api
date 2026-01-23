import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../lib/prisma";

export const createLibData = async (data: Prisma.LibCreateInput) => {
    if(!data.name || !data.category || !data.install) {
        throw new Error('Some data is missing');
    }

    try {
        const commandAndType = await prisma.lib.create({
            data: {
                name: data.name,
                category: data.category,
                install: data.install,
                packageManager: data.packageManager
            },
        })

        return commandAndType;
    } catch (err: any) {
        console.log('Some error ocurred on service', err);
    }
}

export const createManyLibsData = async (data: Prisma.LibCreateManyInput[]) => {
    if(!data.length) {
        throw new Error('Some data is missing');
    }

    try {
       return await prisma.lib.createMany({
        data
       })
    } catch (err: any) {
        console.log('Some error ocurred on service', err);
        throw err;
    }
}

export const deleteLib = async (id: number) => {
    return await prisma.lib.delete({
        where: {
            id,
        }
    })
}

export const deleteManyLibs = async (id: number) => {
    return await prisma.lib.deleteMany({
        where: {
            packageManagerId:id
        }
    })
}

export const updateLib = async (id: number, data: Prisma.LibUpdateInput,) => {
    try {
        const libName = await prisma.lib.update({
            where: {
                id,
            },
            data,
        })
        return libName;
    }catch (err: any) {
        console.log('Some error ocurred on service', err);
        throw err;
    }
}

export const readLib = async () => {
    return await prisma.lib.findMany({});
}

export const readLibByPack = async (packageManagerId: number) => {
    return await prisma.lib.findMany({
        where: {
            packageManagerId,
        }
    })
}