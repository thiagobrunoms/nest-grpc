FROM node:latest AS dev

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only-development

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]