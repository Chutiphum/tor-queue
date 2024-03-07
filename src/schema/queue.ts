import { z } from "zod";
import { zfd } from "zod-form-data";

export const queueSchemaFormData = zfd.formData({
  uId: zfd.numeric(z.number().int()),
  rId: zfd.numeric(z.number().int()),
  startTime: zfd.text(z.coerce.date()),
  endTime: zfd.text(z.coerce.date()),
})
