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

export async function addRoom(data: Prisma.RoomCreateInput) {
  try {
    const room = await prisma.room.create({ data })
    return room
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function updateRoom(where: Prisma.RoomWhereUniqueInput, data: Prisma.RoomUpdateInput) {
  try {
    const existingRoom = await prisma.room.findFirst({ where });

    if (!existingRoom) {
      throw new Error('Room not found'); // Throw an error if the room is not found
    }

    const updatedRoom = await prisma.room.update({ where, data });
    return updatedRoom;
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

