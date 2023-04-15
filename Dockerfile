FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV production
COPY package*.json ./
RUN npm ci && npm cache clean --force
USER node
COPY --from=build /app/dist ./dist
CMD ["node", "dist/main.js"]