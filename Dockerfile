# Stage 1: deps
FROM node:20-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Stage 2: build (compile TS → JS)
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build
# hasilnya: /app/dist

# Stage 3: production runtime
FROM node:20-alpine

WORKDIR /app

# hanya ambil yang diperlukan
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

# buat folder data (SQLite)
RUN mkdir -p /app/data \
    && chown -R node:node /app

USER node

ENV NODE_ENV=production
ENV DB_PATH=/app/data/database.sqlite

EXPOSE 3000

CMD ["node", "dist/index.js"]