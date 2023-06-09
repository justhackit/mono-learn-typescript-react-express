#docker buildx build --push --platform linux/arm64  -t ajayedap/playground:learn-typescript .
FROM node:alpine
#============= Install these as we need it for one of node's dependency in arm64========================
#ENV PYTHONUNBUFFERED=1
#RUN apk add --update --no-cache python3 build-base make && ln -sf python3 /usr/bin/python
#RUN python3 -m ensurepip
#RUN pip3 install --no-cache --upgrade pip setuptools
#=============================================================================================================

WORKDIR /usr/src/app 

COPY package*.json ./

RUN npm install --omit-dev

COPY . .
#This invokes tsc to bulid js files. See scripts section of package.json
RUN npm run build 

EXPOSE 3000 

CMD ["node","build/mui-admin-backend/server.js"]
