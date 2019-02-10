FROM node:10 as build
WORKDIR /usr/src/app
COPY package.json ./
COPY build ./build
COPY src ./src
RUN npm install --only=production
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]