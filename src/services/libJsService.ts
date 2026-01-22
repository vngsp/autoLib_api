import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../lib/prisma";

export const createPackageManager = async (data: Prisma.PackageManagerCreateInput) => {
    if(!data.name || !data.install) {
        throw new Error("Some data is missing");
    }

    try {
        const packageManager = await prisma.packageManager.create({
            data: {
                name: data.name,
                install: data.install
            }
        })

        return packageManager;
    }catch (err: any) {
        console.log('Some error ocurred on service', err);
    }
}

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