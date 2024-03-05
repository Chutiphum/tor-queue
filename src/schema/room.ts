import { z } from "zod";

export const roomSchema = z.object({
  title: z.string().min(3).max(30),
  description: z.string().max(69420).optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  enabled: z.boolean().default(true),
  // TODO add this after finishing stuffs with storage and file uploading
  // images: z.string().array()
})
