FROM node:16
WORKDIR /app
COPY . .
COPY package.json .
COPY package-lock.json .
RUN npm i
ENV NODE_ENV development
EXPOSE 3002
CMD ["npm", "start"]