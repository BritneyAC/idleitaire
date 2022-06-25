import * as trpc from "@trpc/server"
import { z } from "zod"

export const appRouter = trpc.router().query("get-user-by-id", {
  input: z.object({ id: z.number() }),
  async resolve({ input }){
    return input;
  }
});

export type AppRouter = typeof appRouter