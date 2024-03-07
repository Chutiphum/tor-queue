import { z } from "zod";
import { zfd } from "zod-form-data";

export const roomSchema = z.object({
  title: z.string().min(3).max(30),
  description: z.string().max(69420).optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  enabled: z.boolean().default(true),
  images: z.instanceof(File),
})

export const roomSchemaFormData = zfd.formData({
  title: zfd.text(z.string().min(3).max(30)),
  description: zfd.text(z.string().max(69420).optional()),
  startTime: zfd.text(z.coerce.date()),
  endTime: zfd.text(z.coerce.date()),
  enabled: zfd.checkbox({ trueValue: 'true' }),
  image: zfd.file(z.instanceof(File))
})
