# Use a node base image
FROM node:21.7.2

WORKDIR /usr/app

COPY . .

RUN npm init -y
RUN npm install express
RUN npm install nodemon -g

ENV PATH /usr/local/bin:$PATH

EXPOSE 3020

CMD ["nodemon", "--legacy-watch", "--watch", "./dist", "--exec", "node build.js"]
