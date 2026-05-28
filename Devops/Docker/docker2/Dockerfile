FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install
COPY . .
RUN npx prisma init
RUN npx prisma migrate
RUN npx prisma generate

CMD ["npm", "start"]

CMD ["npm "]