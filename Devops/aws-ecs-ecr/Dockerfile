FROM oven/bun:alpine

WORKDIR /app
COPY package.json /app/package.json
COPY index.ts  /app/index.ts

RUN bun install

CMD ["bun", "run", "index.ts"]
