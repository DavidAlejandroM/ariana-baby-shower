FROM node:13.14.0 AS node-image

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
RUN ls -l
RUN ls -l /usr/src/app/dist
### STAGE 2: Run ###
FROM nginx:1.18.0-alpine
COPY --from=node-image /usr/src/app/dist/ariana-baby-shower /usr/share/nginx/html
RUN ls -l /usr/share/nginx/html
