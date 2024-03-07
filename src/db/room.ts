import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getAllRooms() {
  try {
    const rooms = await prisma.room.findMany({
      relationLoadStrategy: 'join',
      include: {
        queues: true,
      },
      orderBy: {
        updatedAt: 'desc'
      }
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
        queues: {
          include: {
            user: true
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
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

export async function deleteRoom(rId: number) {
  try {
    const res = await prisma.room.delete({
      where: {
        rId
      }
    })
    return res
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function turnOn(rId: number) {
  try {
    const res = await prisma.room.update({
      where: {
        rId,
      },
      data: {
        enabled: true
      }
    })
    return res
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function turnOff(rId: number) {
  try {
    const res = await prisma.room.update({
      where: {
        rId,
      },
      data: {
        enabled: false
      }
    })
    return res
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}
