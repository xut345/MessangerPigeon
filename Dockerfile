FROM node:10 as build
WORKDIR /usr/src/app
COPY . .
RUN npm install --only=production
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]