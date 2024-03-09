import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllUsers() {
    try {
        const allUsers = await prisma.user.findMany();
        return allUsers
    } catch (error) {
        console.error('Error retrieving users:', error);
    } finally {
        await prisma.$disconnect();
    }
}

export async function updateRoleAdmin(uId: number) {
    try {
        // Update the user's role to "admin"
        const res = await prisma.user.updateMany({
            where: { uId: uId },
            data: { role: "admin" }
        });

        return res;
    } catch (err) {
        throw err;
    } finally {
        await prisma.$disconnect();
    }
}


export async function updateRoleUser(uId: number) {
    try {
        // Update the user's role to "admin"
        const res = await prisma.user.updateMany({
            where: { uId: uId },
            data: { role: "user" }
        });

        return res;
    } catch (err) {
        throw err;
    } finally {
        await prisma.$disconnect();
    }
}



export async function deleteUser(uId: number) {
    try {
        const res = await prisma.user.delete({
            where: {
                uId
            }
        })
        return res
    } catch (err) {
        throw err
    } finally {
        await prisma.$disconnect()
    }
}