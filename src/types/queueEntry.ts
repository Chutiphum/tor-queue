export type QueueEntry = {
  id: number
  number: number
  shopTitle: string
  startTime: Date
  endTime: Date
  finished: boolean
  description?: string | undefined
  imageUrl?: string | undefined
}
