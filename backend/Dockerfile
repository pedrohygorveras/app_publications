FROM node:20.9.0

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm install --legacy-peer-deps

COPY . /app

ENV NODE_ENV=production

RUN npx prisma generate
RUN npx prisma migrate dev

EXPOSE 3021

CMD ["npm", "run", "build"]
