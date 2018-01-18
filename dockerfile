FROM node:9

RUN mkdir -p /home/nodejs/app
WORKDIR /home/nodejs/app

COPY . /home/nodejs/app
RUN npm install
EXPOSE 6881
CMD ["node", "index.js"]
