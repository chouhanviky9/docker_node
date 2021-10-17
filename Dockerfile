FROM node:15
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 2000
EXPOSE 2000
CMD [ "node", "index.js" ]


