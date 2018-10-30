FROM node:8
 
MAINTAINER eluttner@gmail.com
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
 
RUN npm install -g nodemon
RUN npm install


EXPOSE 8000
 
# Start the Node.js app on load
CMD [ "npm", "restart" ]