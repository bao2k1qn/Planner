import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  serviceId: z.string(),
  name: z.string(),
  period: z.number(),
  price: z.number(),
});

export type Task = z.infer<typeof taskSchema>;
