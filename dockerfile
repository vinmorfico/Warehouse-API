FROM node:14.17.3

WORKDIR /api

COPY package*.json ./
COPY tsconfig.json ./
COPY . .

RUN ls -a

RUN npm install
RUN npm run build

EXPOSE 3000