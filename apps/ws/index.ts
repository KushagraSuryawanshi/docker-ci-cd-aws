import { prisma } from "@repo/db";

Bun.serve({
  port: Number(process.env.PORT) || 3002,
  fetch(req, server) {
    if (server.upgrade(req)) {
      return;
    }
    return new Response("Upgrade failed", { status: 500 });
  },
  websocket: {
    async message(ws, message) {
      await prisma.user.create({
        data: {
          username: Math.random().toString(),
          password: Math.random().toString(),
        },
      });
      ws.send(message);
    },
  },
});
