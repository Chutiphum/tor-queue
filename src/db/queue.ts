import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getAllQueues() {
  try {
    const queues = await prisma.queue.findMany({
      include: {
        user: true,
        room: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
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

export async function addQueue({ uId, rId, startTime, endTime }: {
  uId: number, rId: number, startTime: string, endTime: string
}) {
  try {
    const queue = await prisma.queue.create({
      data: {
        uId, rId, startTime, endTime,
        finished: false, deleted: false
      }
    })
    return queue
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function deleteQueue(qId: number) {
  try {
    const deletedQueue = await prisma.queue.update({
      where: {
        qId
      },
      data: {
        deleted: true,
        deletionTime: new Date()
      }
    })
    return deletedQueue
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function deleteAllQueues(rId: number) {
  try {
    const res = await prisma.queue.updateMany({
      where: {
        rId,
        deleted: false
      },
      data: {
        deleted: true,
        deletionTime: new Date(),
      },
    })
    return res
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function markQueueFinished(qId: number) {
  try {
    const res = await prisma.queue.update({
      where: {
        qId
      },
      data: {
        finished: true
      }
    })
    return res
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}
