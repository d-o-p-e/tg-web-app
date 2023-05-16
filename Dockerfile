FROM node:16 AS builder

ARG KAKAO_CLIENT_ID

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

ENV VITE_KAKAO_CLIENT_ID=$KAKAO_CLIENT_ID \
    VITE_KAKAO_REDIRECT_URI_DEV=https://localhost:5173/oauth/kakao \
    VITE_KAKAO_REDIRECT_URI_PROD=https://dope.yanychoi.site/oauth/kakao \
    VITE_PROD_BASE_URL=https://dope.yanychoi.site/api \
    VITE_DEV_BASE_URL=https://127.0.0.1:5173/ \
    MODE=production

RUN yarn build

FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
