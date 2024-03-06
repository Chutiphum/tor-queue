import { z } from "zod";


export const addQueueSchema = z.object({
  qId: z.number().int(),
  uId: z.number().int(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  rId: z.number().int(),
  finished: z.boolean().default(true),
  deleted: z.boolean().default(true),
  // TODO add this after finishing stuffs with storage and file uploading
  // images: z.string().array()
})


