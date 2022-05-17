FROM node:16-alpine

#COPY package*.json ./

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm","start"]