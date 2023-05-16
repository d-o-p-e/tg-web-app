FROM node:16 AS builder

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
