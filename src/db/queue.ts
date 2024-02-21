import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getAllQueues() {
  try {
    const queues = await prisma.queue.findMany()
    return queues
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function getOneQueue(where: Prisma.QueueWhereInput) {
  try {
    const queue = await prisma.queue.findFirst({
      where,
      include: {
        user: true,
        room: true,
      },
    })
    return queue
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}
