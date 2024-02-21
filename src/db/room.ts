import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getAllRooms() {
  try {
    const rooms = await prisma.room.findMany()
    return rooms
  } catch (err) {
    console.error(err)
  } finally {
    await prisma.$disconnect()
  }
}
