#docker build  -t learn-typescript:v0.1 .
#To Push : docker tag learn-typescript:v0.1 ajayedap/playground:learn-typescript;docker push ajayedap/playground:learn-typescript
#docker buildx build  --platform linux/arm64  -t learn-typescript:v0.1 .
#docker buildx build -t learn-typescript:v0.1 .
FROM node:alpine

WORKDIR /usr/src/app 

COPY package*.json ./

RUN npm install --omit-dev

COPY . .
#This invokes tsc to bulid js files. See scripts section of package.json
RUN npm run build 

EXPOSE 3000 

CMD ["node","build/mui-admin-backend/server.js"]
