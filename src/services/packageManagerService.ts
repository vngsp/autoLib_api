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

export const deletePackageManager = async (id: number) => {
    if(!id) {
        throw new Error("Id is missing");
    }

    try {
        const libCount = await prisma.lib.count({
            where: {
                packageManagerId: id,
            }
        })  

        if(libCount > 0) {
            const error: any = new Error();
            error.code = 'HAS_LIBS';
            throw error;
        } else {
            const packageManager = await prisma.packageManager.delete({
                where: {
                    id,
                }
            })

            return packageManager;
        }     
    } catch(err: any) {
        console.log('Some error ocurred on service', err);
        throw err;
    }
}

export const updatePackageManager = async (data: Prisma.PackageManagerUpdateInput, id: number ) => {
    try {
        const packageManager = await prisma.packageManager.update({
            where: {
                id,
            },
            data: {
                name: data.name,
                install: data.install,
            }
        })
       return packageManager;
    } catch(err: any) {
        console.log('Some error ocurred on service', err);
        throw err;
    }
}

export const readPackageManager = async () => {
    return await prisma.packageManager.findMany({});
}