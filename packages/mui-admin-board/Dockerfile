#docker buildx build --push --platform linux/arm64  -t ajayedap/playground:learn-mui-adminboard .
FROM node:16-alpine as builder
#============= Install these as we need it for one of node's dependency in arm64========================
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 build-base make && ln -sf python3 /usr/bin/python
#=============================================================================================================
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY package.json yarn.lock ./ 
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN yarn install --production --network-timeout 500000 && yarn cache clean
COPY . . 
RUN yarn build
#CMD ["yarn", "start"]

##This is the best way, but facing lot of issues. So lets look at it later
# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
#COPY --from=builder /app/build /usr/share/nginx/html/learn-mui-react
COPY --from=builder /app/build /usr/share/nginx/html/
# Add your nginx.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 8090
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
