import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getAllRooms() {
  try {
    const rooms = await prisma.room.findMany({
      relationLoadStrategy: 'join',
      include: {
        queues: true,
      },
    })
    return rooms
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function getOneRoom(where: Prisma.RoomWhereInput) {
  try {
    const room = await prisma.room.findFirst({
      where,
      relationLoadStrategy: 'join',
      include: {
        queues: true,
      },
    })
    return room
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}
