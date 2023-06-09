#docker buildx build --push --platform linux/arm64  -t ajayedap/playground:learn-typescript .
FROM node:alpine

WORKDIR /usr/src/app 

COPY package*.json ./

RUN npm install --omit-dev

COPY . .
#This invokes tsc to bulid js files. See scripts section of package.json
RUN npm run build 

EXPOSE 3000 

CMD ["node","build/mui-admin-backend/server.js"]
