FROM node:13.14.0 AS compile-image

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
RUN ls -l
### STAGE 2: Run ###
FROM nginx:1.18.0-alpine
COPY /usr/src/app/dist/ /usr/share/nginx/html
