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