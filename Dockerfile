# Stage 1: deps
FROM node:20-alpine AS deps
WORKDIR /

COPY package*.json ./
RUN npm ci

# Stage 2: build (compile TS → JS)
FROM node:20-alpine AS builder
WORKDIR /

COPY --from=deps /node_modules ./node_modules
COPY . .

RUN npm run build
# hasilnya: /dist

# Stage 3: production runtime
FROM node:20-alpine

WORKDIR /

# hanya ambil yang diperlukan
COPY --from=builder /dist ./dist
COPY --from=builder /node_modules ./node_modules
COPY package*.json ./

# buat folder data (SQLite)
RUN chown -R node:node /data

USER node

ENV NODE_ENV=production
ENV DB_PATH=/data/database.sqlite

EXPOSE 3000

CMD ["node", "dist/index.js"]