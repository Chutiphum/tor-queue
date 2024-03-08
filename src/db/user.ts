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

export async function updateUser(uId: number) {
    try {
        // Fetch the current role of the user
        const user = await prisma.user.findUnique({
            where: { uId: uId }
        });

        if (!user) {
            throw new Error("User not found");
        }

        // Determine the new role based on the current role
        let newRole: "admin" | "user" = "user"; // Default to "user"
        if (user.role === "user") {
            newRole = "admin";
        }

        // Update the user's role
        const res = await prisma.user.updateMany({
            where: { uId: uId },
            data: { role: newRole }
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

