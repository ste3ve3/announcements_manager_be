# Build Stage
FROM node:21-alpine3.17 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./

# Serve Stage
FROM node:21-alpine3.17
WORKDIR /app
COPY --from=build /app ./

EXPOSE 5000
CMD ["npm", "start"]