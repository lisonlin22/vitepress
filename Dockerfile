FROM node:18.14.0
COPY ./ /app
WORKDIR /app
RUN npm config set registry http://registry.npm.taobao.org
RUN npm install
RUN npm run build

FROM nginx:1.15.2-alpine
RUN mkdir /app
COPY --from=0 /app/docs/.vitepress/dist /app
COPY nginx.conf /etc/nginx/nginx.conf