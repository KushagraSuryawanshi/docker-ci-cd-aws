FROM oven/bun:1-alpine

WORKDIR /usr/src/app

COPY package.json bun.lock ./

COPY apps/ws/package.json apps/ws/package.json
COPY packages/db/package.json packages/db/package.json

RUN bun install --frozen-lockfile 

COPY . .

RUN bun run db:generate

EXPOSE 3002

CMD [ "bun", "run", "start:ws" ]