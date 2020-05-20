FROM node:13.14.0 AS compile-image

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.18.0-alpine
COPY --from=build /usr/src/app/build/ /usr/share/nginx/html
