FROM node:23.7.0
WORKDIR /front
COPY . .
RUN npm install
RUN npm install webpack-dev-server@latest --save-dev
EXPOSE 3000
CMD npm start