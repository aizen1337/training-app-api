import { logger } from "@bogeychan/elysia-logger";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { autoroutes } from "elysia-autoroutes";
import { clerkPlugin } from "elysia-clerk";
import { rateLimit } from "elysia-rate-limit";
import { requestID } from "elysia-requestid";

const app = new Elysia()
.use(logger({
  timestamp: true,
  autoLogging: true,
  crlf: true,
  customProps(ctx) {
    return ctx
  },
}))
.use(swagger())
.use(rateLimit())
.use(clerkPlugin())
.use(requestID())
.use(autoroutes(
  {
    prefix: '/api'
  }
))
.listen(3000);

export type ElysiaApp = typeof app

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
